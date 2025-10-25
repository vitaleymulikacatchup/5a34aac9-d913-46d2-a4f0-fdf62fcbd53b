import React from 'react';
import { ExternalLink, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-phantom-dark-text mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Download</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Security</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Support</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Feature Requests</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-phantom-dark-text mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Explore</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Learn</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Blog</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Docs</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Taxes</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-phantom-dark-text mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">About</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Careers</a></li>
              <li><a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Press Kit</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-phantom-dark-text mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <ExternalLink className="w-4 h-4" />
                  <span>X.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <ExternalLink className="w-4 h-4" />
                  <span>Reddit</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-phantom-gray-text hover:text-phantom-dark-text">
                  <ExternalLink className="w-4 h-4" />
                  <span>Podcast</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational status */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-phantom-gray-text text-sm">Operational</span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-phantom-gray-text text-sm mb-4 md:mb-0">
            © Phantom 2025
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text text-sm">Terms</a>
            <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;