import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-phantom-purple rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-white rounded-full ml-1 opacity-60"></div>
              </div>
              <span className="text-xl font-semibold text-phantom-dark-text">phantom</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-phantom-gray-text hover:text-phantom-dark-text cursor-pointer">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-phantom-gray-text hover:text-phantom-dark-text cursor-pointer">
              <span>Learn</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Explore</a>
            <div className="flex items-center space-x-1 text-phantom-gray-text hover:text-phantom-dark-text cursor-pointer">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Support</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-phantom-gray-text cursor-pointer hover:text-phantom-dark-text hidden md:block" />
            <button className="bg-phantom-purple hover:bg-phantom-purple-dark text-white px-6 py-2 rounded-full font-medium transition-colors">
              Download
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Features</a>
              <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Learn</a>
              <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Explore</a>
              <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Company</a>
              <a href="#" className="text-phantom-gray-text hover:text-phantom-dark-text">Support</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;