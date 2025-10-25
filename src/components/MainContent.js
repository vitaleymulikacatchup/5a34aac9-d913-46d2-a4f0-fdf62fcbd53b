import React from 'react';
import { Download } from 'lucide-react';

const MainContent = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-phantom-gray-text mb-6">
          The crypto wallet that'll take you places
        </p>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-phantom-dark-text mb-8">
          Your{' '}
          <span className="inline-flex items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-phantom-purple rounded-2xl flex items-center justify-center mr-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full opacity-80"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full ml-1 opacity-60"></div>
            </div>
          </span>
          trusted
          <br />
          companion
        </h2>
        
        <button className="inline-flex items-center space-x-2 bg-white border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full font-medium transition-colors">
          <Download className="w-5 h-5" />
          <span>Download Phantom</span>
        </button>
        
        {/* Phone mockup */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-96 bg-black rounded-3xl p-2 relative">
            <div className="w-full h-full bg-gray-900 rounded-2xl p-4 relative overflow-hidden">
              {/* Status bar */}
              <div className="flex justify-between items-center text-white text-sm mb-6">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              
              {/* Balance */}
              <div className="text-center mb-8">
                <div className="text-white text-3xl font-bold mb-2">$3,108.47</div>
                <div className="text-green-400 text-sm">+$24.67 (0.8%)</div>
              </div>
              
              {/* Action buttons */}
              <div className="flex justify-center space-x-4 mb-8">
                <button className="bg-phantom-purple text-white px-6 py-2 rounded-full text-sm">
                  Send
                </button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm">
                  Receive
                </button>
              </div>
              
              {/* Token list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-medium">SOL</div>
                      <div className="text-gray-400 text-xs">Solana</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm">15.2</div>
                    <div className="text-gray-400 text-xs">$2,890</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-medium">USDC</div>
                      <div className="text-gray-400 text-xs">USD Coin</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm">218.47</div>
                    <div className="text-gray-400 text-xs">$218</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;