import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with error handling
let resend: any = null;
try {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("RESEND_API_KEY not found in environment variables");
  } else {
    resend = new Resend(apiKey);
    console.log("Resend initialized successfully");
  }
} catch (error) {
  console.error("Error initializing Resend:", error);
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  hearAbout?: string;
  interestedIn?: string;
  contactMethod?: string;
  contactTime?: string;
  honeypot?: string;
  submissionTime?: number;
  currentTime?: number;
}

// Rate limiting storage (in-memory for simplicity)
const submissionAttempts = new Map<string, number[]>();

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error("Resend not initialized - missing API key");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Spam prevention checks
    
    // 1. Honeypot check
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      console.log("Honeypot field filled, blocking submission");
      return new Response(
        JSON.stringify({ success: false, error: "Invalid submission" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 2. Time-based check (form must be open for at least 3 seconds)
    if (formData.submissionTime && formData.currentTime) {
      const formOpenTime = formData.currentTime - formData.submissionTime;
      if (formOpenTime < 3000) { // Less than 3 seconds
        console.log("Form submitted too quickly, blocking submission");
        return new Response(
          JSON.stringify({ success: false, error: "Please take more time to fill the form" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // 3. Rate limiting by email (max 3 submissions per hour)
    const clientEmail = formData.email;
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    if (!submissionAttempts.has(clientEmail)) {
      submissionAttempts.set(clientEmail, []);
    }
    
    const emailAttempts = submissionAttempts.get(clientEmail)!;
    // Remove attempts older than 1 hour
    const recentAttempts = emailAttempts.filter(timestamp => now - timestamp < oneHour);
    
    if (recentAttempts.length >= 3) {
      console.log("Rate limit exceeded for email:", clientEmail);
      return new Response(
        JSON.stringify({ success: false, error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    
    // Add current attempt
    recentAttempts.push(now);
    submissionAttempts.set(clientEmail, recentAttempts);

    // 4. Basic input validation and sanitization
    const sanitizedData = {
      firstName: formData.firstName?.trim().slice(0, 100) || '',
      lastName: formData.lastName?.trim().slice(0, 100) || '',
      email: formData.email?.trim().slice(0, 254) || '',
      phone: formData.phone?.trim().slice(0, 20) || '',
      subject: formData.subject?.trim().slice(0, 200) || '',
      message: formData.message?.trim().slice(0, 2000) || '',
      hearAbout: formData.hearAbout?.trim().slice(0, 100) || '',
      interestedIn: formData.interestedIn?.trim().slice(0, 200) || '',
      contactMethod: formData.contactMethod?.trim().slice(0, 50) || '',
      contactTime: formData.contactTime?.trim().slice(0, 50) || ''
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email to GHB EMEA using sanitized data
    const emailResponse = await resend.emails.send({
      from: "GHB Contact Form <noreply@ghb-emea.com>",
      to: ["hatem.eladl@ghb-emea.com"],
      subject: `New Contact Form Submission: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A5180;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizedData.phone}</p>` : ''}
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>

          ${sanitizedData.interestedIn ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Additional Information</h3>
            <p><strong>Interested in:</strong> ${sanitizedData.interestedIn}</p>
            ${sanitizedData.hearAbout ? `<p><strong>How they heard about us:</strong> ${sanitizedData.hearAbout}</p>` : ''}
            ${sanitizedData.contactMethod ? `<p><strong>Preferred contact method:</strong> ${sanitizedData.contactMethod}</p>` : ''}
            ${sanitizedData.contactTime ? `<p><strong>Preferred contact time:</strong> ${sanitizedData.contactTime}</p>` : ''}
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the GHB EMEA contact form on your website.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user using sanitized data
    const confirmationResponse = await resend.emails.send({
      from: "GHB EMEA <noreply@ghb-emea.com>",
      to: [sanitizedData.email],
      subject: "Thank you for contacting GHB EMEA",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0A5180;">Thank you for contacting us!</h2>
          
          <p style="color: #333;">Dear ${sanitizedData.firstName},</p>
          
          <p style="color: #333;">We have received your message and our team will get back to you as soon as possible.</p>
          
          <p style="color: #333;">If you have any urgent matters, please don't hesitate to contact us directly.</p>
          
          <p style="color: #333;">Best regards,<br>The GHB EMEA Team</p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);