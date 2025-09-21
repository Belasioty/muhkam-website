import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import muhkamLogoOriginal from '@/assets/muhkam-logo-new.png';

interface LogoProcessorProps {
  onProcessed: (processedLogoUrl: string) => void;
}

export const LogoProcessor: React.FC<LogoProcessorProps> = ({ onProcessed }) => {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Load the original logo
        const response = await fetch(muhkamLogoOriginal);
        const blob = await response.blob();
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        const processedUrl = URL.createObjectURL(processedBlob);
        
        onProcessed(processedUrl);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo
        onProcessed(muhkamLogoOriginal);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [onProcessed]);

  if (isProcessing) {
    return null; // Return nothing while processing
  }

  return null;
};