'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent') === 'true';
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-700 text-sm md:text-base">
              <p className="font-medium">We use cookies to enhance your experience.</p>
              <p className="text-gray-500 text-sm mt-1">
                By continuing to use this website, you agree to our{' '}
                <a href="#" className="text-primary-600 hover:underline">
                  Cookie Policy
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleAccept}
                variant="primary"
                size="sm"
              >
                Accept
              </Button>
              <Button
                onClick={() => setShowBanner(false)}
                variant="outline"
                size="sm"
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 