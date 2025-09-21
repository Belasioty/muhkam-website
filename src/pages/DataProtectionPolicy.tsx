import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import Footer from '@/components/Footer';

export default function DataProtectionPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">Data Protection Policy for GHB Business Entrepreneurs LLC</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            Version 1.0 - Last Updated: 11 September 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction and Scope</h2>
            <p className="text-muted-foreground mb-4">
              This Data Protection Policy applies to GHB Business Entrepreneurs LLC ("GHB", "we", "us", or "our") and all its employees, contractors, and affiliates. It outlines our commitment to protecting the Personal Data of our clients, partners, employees, and other individuals.
            </p>
            <p className="text-muted-foreground mb-4">
              This policy is designed to comply with the Qatar Personal Data Protection Law (Law No. 13 of 2016) and the Qatar Financial Centre (QFC) Data Protection Regulations 2005. It is based on the principles of the General Data Protection Regulation (GDPR) to ensure a high standard of data protection.
            </p>
            <p className="text-muted-foreground">
              This policy covers all Personal Data processed by GHB, regardless of whether it is collected online, offline, or through any other means. It applies to all our business activities, including our website (www.ghb-emea.com), services, and internal operations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Protection Principles</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to processing Personal Data in accordance with the following data protection principles from the QFC Data Protection Regulations:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li><strong>Lawfulness, Fairness, and Transparency:</strong> We will process Personal Data lawfully, fairly, and in a transparent manner.</li>
              <li><strong>Purpose Limitation:</strong> We will only collect and process Personal Data for specified, explicit, and legitimate purposes.</li>
              <li><strong>Data Minimization:</strong> We will ensure that Personal Data is adequate, relevant, and limited to what is necessary for the intended purposes.</li>
              <li><strong>Accuracy:</strong> We will take reasonable steps to ensure that Personal Data is accurate and kept up to date.</li>
              <li><strong>Storage Limitation:</strong> We will not keep Personal Data for longer than is necessary for the purposes for which it was collected.</li>
              <li><strong>Integrity and Confidentiality:</strong> We will implement appropriate technical and organizational measures to ensure the security of Personal Data.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Subject Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under the QFC Data Protection Regulations, data subjects have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>The right to be informed:</strong> Individuals have the right to be informed about the collection and use of their Personal Data.</li>
              <li><strong>The right of access:</strong> Individuals have the right to access their Personal Data and supplementary information.</li>
              <li><strong>The right to rectification:</strong> Individuals have the right to have inaccurate Personal Data rectified, or completed if it is incomplete.</li>
              <li><strong>The right to erasure:</strong> Individuals have the right to have their Personal Data erased.</li>
              <li><strong>The right to restrict processing:</strong> Individuals have the right to request the restriction or suppression of their Personal Data.</li>
              <li><strong>The right to data portability:</strong> Individuals have the right to obtain and reuse their Personal Data for their own purposes across different services.</li>
              <li><strong>The right to object:</strong> Individuals have the right to object to the processing of their Personal Data in certain circumstances.</li>
              <li><strong>Rights in relation to automated decision making and profiling:</strong> Individuals have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or similarly significantly affects them.</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise any of these rights, please contact our Data Protection Officer at info@ghb-emea.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Lawful Basis for Processing</h2>
            <p className="text-muted-foreground mb-4">
              We will only process Personal Data where we have a lawful basis to do so under the QFC Data Protection Regulations. The lawful bases include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Consent:</strong> The individual has given clear consent for us to process their Personal Data for specific purposes.</li>
              <li><strong>Contract:</strong> The processing is necessary for the performance of a contract with the individual.</li>
              <li><strong>Legal obligation:</strong> The processing is necessary for compliance with a legal obligation.</li>
              <li><strong>Legitimate interests:</strong> The processing is necessary for our legitimate interests or those of a third party, provided these interests do not override the individual's rights and freedoms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Controller and Processor</h2>
            <p className="text-muted-foreground mb-4">
              GHB acts as a Data Controller when we determine the purposes and means of processing Personal Data. We are responsible for ensuring that all Personal Data is processed in compliance with this policy and applicable regulations.
            </p>
            <p className="text-muted-foreground">
              GHB may act as a Data Processor on behalf of our clients. In such cases, we will only process Personal Data as instructed by the Data Controller and in accordance with our contractual obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We will only retain Personal Data for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law. Our retention periods are based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>The nature and sensitivity of the Personal Data</li>
              <li>The purposes for which we process the Personal Data</li>
              <li>Legal and regulatory requirements</li>
              <li>Our legitimate business interests</li>
            </ul>
            <p className="text-muted-foreground">
              When Personal Data is no longer needed, it will be securely deleted or anonymized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We have implemented appropriate technical and organizational measures to protect Personal Data from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access control:</strong> Restricting access to Personal Data to authorized personnel only.</li>
              <li><strong>Encryption:</strong> Encrypting Personal Data both in transit and at rest.</li>
              <li><strong>Regular security assessments:</strong> Conducting regular risk assessments and security audits to identify and address potential vulnerabilities.</li>
              <li><strong>Employee training:</strong> Providing regular data protection training to all our employees.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Breach Notification</h2>
            <p className="text-muted-foreground">
              In the event of a data breach, we will notify the QFC Data Protection Office and affected individuals without undue delay, in accordance with the QFC Data Protection Regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground">
              We may transfer Personal Data to countries outside of Qatar for processing. In such cases, we will ensure that appropriate safeguards are in place to protect the Personal Data, in accordance with the QFC Data Protection Regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Employee Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              All GHB employees, contractors, and affiliates are responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Understanding and complying with this Data Protection Policy</li>
              <li>Protecting Personal Data in their care</li>
              <li>Reporting any suspected data breaches immediately</li>
              <li>Completing mandatory data protection training</li>
              <li>Only accessing Personal Data necessary for their role</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Policy Review</h2>
            <p className="text-muted-foreground">
              This policy will be reviewed and updated annually, or as needed to reflect changes in our business operations or regulatory requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For any questions or concerns about this policy or our data protection practices, please contact our Data Protection Officer at:
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
}