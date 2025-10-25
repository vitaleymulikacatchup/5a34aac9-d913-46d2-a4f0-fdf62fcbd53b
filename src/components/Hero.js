import React from 'react';

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="phantom-gradient rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Meet Phantom Cash
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Enter the world of New Money.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </button>
          </div>
          
          {/* Card illustration */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-48 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 relative">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-8 h-8 bg-phantom-purple rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1 opacity-60"></div>
                  </div>
                  <span className="text-white font-semibold">VISA</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
                </div>
              </div>
              
              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                💬
              </div>
              
              {/* Star decoration */}
              <div className="absolute -bottom-4 -left-4 text-yellow-400 text-2xl">
                ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;