import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Send email to GHB EMEA
    const emailResponse = await resend.emails.send({
      from: "GHB Contact Form <noreply@ghb-emea.com>",
      to: ["info@ghb-emea.com"],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A5180;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${formData.message}</p>
          </div>

          ${formData.interestedIn ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Additional Information</h3>
            <p><strong>Interested in:</strong> ${formData.interestedIn}</p>
            ${formData.hearAbout ? `<p><strong>How they heard about us:</strong> ${formData.hearAbout}</p>` : ''}
            ${formData.contactMethod ? `<p><strong>Preferred contact method:</strong> ${formData.contactMethod}</p>` : ''}
            ${formData.contactTime ? `<p><strong>Preferred contact time:</strong> ${formData.contactTime}</p>` : ''}
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the GHB EMEA contact form on your website.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "GHB EMEA <noreply@ghb-emea.com>",
      to: [formData.email],
      subject: "Thank you for contacting GHB EMEA",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A5180;">Thank you for contacting us!</h2>
          
          <p>Dear ${formData.firstName},</p>
          
          <p>We have received your message and appreciate you reaching out to GHB EMEA. Our team will review your inquiry and get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
          
          <p>If you have any urgent matters or additional questions, please don't hesitate to contact us directly.</p>
          
          <p>Best regards,<br>
          The GHB EMEA Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
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