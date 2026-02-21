import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { shopInfo } from '../data/mock';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${shopInfo.name}! I'm interested in your products. Can you help me?`
    );
    window.open(`https://wa.me/${shopInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          {showTooltip && (
            <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-lg border border-slate-200 animate-in slide-in-from-right-5 duration-500">
              <p className="text-sm font-medium text-slate-900">
                Need help? Chat with us!
              </p>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close tooltip"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-in zoom-in-50 duration-500"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
            
            {/* Mobile Tooltip */}
            <span className="sm:hidden absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat with us
            </span>
          </button>
        </div>
      )}
    </>
  );
};
