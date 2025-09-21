import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-8 py-16 pt-24 max-md:px-5">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Use for GHB Business Entrepreneurs LLC</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Last Updated: 11 September 2025</p>
          
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              These Terms of Use ("Terms"), along with any applicable additional terms, govern your use of and access to the website operated by GHB Business Entrepreneurs LLC ("GHB", "we", "us", or "our") located at www.ghb-emea.com (the "Website"), and any software, applications, or services provided by GHB (collectively, the "Services").
            </p>
            <p className="text-muted-foreground">
              Your agreement to comply with and be bound by these Terms is deemed to occur upon your first use of the Website and/or Services. If you do not agree to these Terms, please do not use our Website or Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Definitions and Interpretation</h2>
            <p className="text-muted-foreground mb-4">In these Terms of Use, the following terms shall have the following meanings:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>"Application"</strong> means any application you are currently using on a device (e.g., mobile, tablet);</li>
              <li><strong>"Content"</strong> means any text, graphics, logos, icons, images, audio, video, software, data compilations, page layout, source code, object code and software and any other form of information capable of being stored in a computer that appears on or forms part of the Website and/or Application;</li>
              <li><strong>"GHB"</strong> means GHB Business Entrepreneurs LLC, a limited liability company registered with the Qatar Financial Centre (QFC Number: 03451) having its registered address at PO Box 27774, Tornado Tower L22, West Bay Doha, Qatar;</li>
              <li><strong>"Services"</strong> means collectively any online facilities, tools, services or information that GHB makes available through the Website and/or Application either now or in the future, including but not limited to Muhkam GRC, business consulting services, and training programs;</li>
              <li><strong>"User(s)"</strong> means any third party that accesses the Website and/or Application;</li>
              <li><strong>"Website"</strong> means the website that you are currently using, any sub-domains of this site unless expressly excluded by their own Terms of Use.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.1</h3>
                <p className="text-muted-foreground">
                  The Website, Software, Services and Content (including any applicable Intellectual Property Rights therein or generated as a result of your use of the same except of any User Data) are the exclusive property of GHB, our affiliates or other relevant third parties. You acquire no rights in relation to these other than those expressly authorised by these Terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.2</h3>
                <p className="text-muted-foreground">
                  You grant us a royalty-free non-exclusive licence to use and copy the User Data for the purposes of making available the Website, Software, Services and/or Content.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.3</h3>
                <p className="text-muted-foreground">
                  All trademarks, service marks, trade names, logos, and other proprietary designations used on or in connection with the Website and Services are trademarks of GHB or third parties. You are not granted any right or license to use any such trademarks.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Rules</h2>
            <h3 className="text-lg font-medium text-foreground mb-2">3.1 General</h3>
            <p className="text-muted-foreground mb-4">You may not:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>reproduce, copy, distribute (on a website, ftp server or otherwise), redistribute, store, sell, rent, lease, make available as a bureau service, sub-license, assign, transfer, disclose, create derivative works or in any other fashion re-use the Website, Software and/or Services without the prior written consent of GHB;</li>
              <li>make adaptations or variations to the Website, Software and/or Services without the prior written consent of GHB;</li>
              <li>disassemble, decompile or otherwise reverse-engineer the Software and/or Services other than as permitted by operation of law;</li>
              <li>use the Website, Software and/or Services in any way that may damage, disable, overburden or impair our servers or networks;</li>
              <li>attempt to gain unauthorized access to any part of the Website, Software, Services, or any connected systems or networks.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by applicable law, GHB shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Website, Software, or Services, even if GHB has been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="text-muted-foreground">
              <p><strong>GHB Business Entrepreneurs LLC</strong></p>
              <p>QFC Number: 03451</p>
              <p>Email: info@ghb-emea.com</p>
              <p>Phone: +974 44292573</p>
              <p>Website: www.ghb-emea.com</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;