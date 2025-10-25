import React, { useState } from 'react';
import { Download } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Download section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-phantom-dark-text mb-8">
            Download{' '}
            <span className="inline-flex items-center">
              <div className="w-12 h-12 bg-phantom-purple rounded-2xl flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full ml-1 opacity-60"></div>
              </div>
            </span>
            Phantom
            <br />
            to get started
          </h2>
          
          <button className="inline-flex items-center space-x-2 bg-white border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full font-medium transition-colors mb-16">
            <Download className="w-5 h-5" />
            <span>Download Phantom</span>
          </button>
        </div>

        {/* Newsletter section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-8 left-8">
            <div className="w-12 h-12 bg-phantom-purple rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-white rounded-full ml-1 opacity-60"></div>
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-phantom-dark-text mb-6">
            Enter your email
          </h3>
          
          <p className="text-phantom-gray-text text-lg mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter and join the growing Phantom community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-phantom-purple focus:border-transparent"
            />
            <button className="bg-phantom-purple hover:bg-phantom-purple-dark text-white px-8 py-3 rounded-full font-medium transition-colors">
              Sign up
            </button>
          </div>
          
          {/* App store mockup */}
          <div className="bg-gray-50 rounded-2xl p-6 max-w-sm mx-auto">
            <div className="grid grid-cols-4 gap-3 mb-4">
              {/* App icons */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-phantom-purple rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;