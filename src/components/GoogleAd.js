import React, { useEffect } from 'react';

const GoogleAd = ({ 
  adClient, 
  adSlot, 
  adFormat = 'auto', 
  fullWidth = false, 
  className 
}) => {
  useEffect(() => {
    try {
      // Push ad configuration to AdSense queue
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins 
      className={`adsbygoogle ${className}`}
      style={{ 
        display: 'block', 
        width: fullWidth ? '100%' : 'auto' 
      }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAd;