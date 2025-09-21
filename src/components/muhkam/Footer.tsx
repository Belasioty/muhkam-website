import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Muhkam</h3>
            <p className="text-muted-foreground">
              AI-Powered Governance and Audit Solutions for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">Use Cases</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Use</a></li>
              <li><a href="/data-protection" className="text-muted-foreground hover:text-foreground transition-colors">Data Protection</a></li>
              <li><a href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex justify-between items-center max-md:flex-col max-md:gap-4">
          <p className="text-muted-foreground">
            © 2024 Muhkam. All rights reserved. | Contact: info@ghb-emea.com
          </p>
          <a href="https://www.linkedin.com/company/ghb-business-entrepreneurs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center gap-2" aria-label="LinkedIn">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};