import React, { useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import muhkamLogoOriginal from '@/assets/muhkam-logo-new.png';

export const FaviconGenerator: React.FC = () => {
  useEffect(() => {
    const generateTransparentFavicon = async () => {
      try {
        // Load the original logo
        const response = await fetch(muhkamLogoOriginal);
        const blob = await response.blob();
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        
        // Create a favicon-sized canvas (32x32)
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) throw new Error('Could not get canvas context');
        
        // Load the processed image
        const processedImage = await loadImage(processedBlob);
        
        // Draw the processed image to the favicon canvas
        ctx.drawImage(processedImage, 0, 0, 32, 32);
        
        // Convert to blob and create object URL
        canvas.toBlob((faviconBlob) => {
          if (faviconBlob) {
            const faviconUrl = URL.createObjectURL(faviconBlob);
            
            // Update the favicon
            const existingFavicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
            if (existingFavicon) {
              existingFavicon.href = faviconUrl;
            } else {
              const newFavicon = document.createElement('link');
              newFavicon.rel = 'icon';
              newFavicon.type = 'image/png';
              newFavicon.href = faviconUrl;
              document.head.appendChild(newFavicon);
            }
            
            console.log('Transparent favicon generated successfully');
          }
        }, 'image/png');
        
      } catch (error) {
        console.error('Failed to generate transparent favicon:', error);
      }
    };

    generateTransparentFavicon();
  }, []);

  return null;
};