import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-4 px-4 sm:px-6 md:px-12 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <p className="text-[10px] sm:text-xs md:text-sm text-center sm:text-left">&copy; 2026 QPay. Pay Anywhere. Even Offline.</p>
        <div className="mr-6 flex space-x-6">
          <a href="https://www.instagram.com/mythriftng?igsh=MTFzM2tkMXp2Z2RpYg==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://x.com/mythriftng" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
