import React from 'react';

const Features = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Keep everything in one place */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-phantom-dark-text mb-12">
            Keep everything
            <br />
            in{' '}
            <span className="inline-flex items-center">
              <div className="w-12 h-12 bg-phantom-purple rounded-2xl flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full ml-1 opacity-60"></div>
              </div>
            </span>
            one place
          </h2>
        </div>

        {/* Feature cards */}
        <div className="space-y-16">
          {/* Purple card */}
          <div className="flex justify-center">
            <div className="w-80 h-96 phantom-card-purple rounded-3xl p-8 text-white relative overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">
                  Multiple chains, one wallet. No more switching.
                </h3>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 translate-y-16"></div>
            </div>
          </div>

          {/* Yellow card */}
          <div className="flex justify-center">
            <div className="w-80 h-96 phantom-card-yellow rounded-3xl p-8 text-black relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">
                  Do more with NFTs — pin, hide, burn, and list.
                </h3>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-black/10 rounded-full transform -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/10 rounded-full transform translate-y-8 -translate-x-8"></div>
            </div>
          </div>

          {/* White card */}
          <div className="flex justify-center">
            <div className="w-80 h-96 phantom-card-white rounded-3xl p-8 text-phantom-dark-text relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">
                  Self-custodial means you control your crypto. Only you ever have access.
                </h3>
              </div>
              <div className="absolute right-4 top-1/2 w-1 h-32 bg-phantom-purple rounded-full transform -translate-y-1/2"></div>
              <div className="absolute right-8 top-1/2 w-1 h-24 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;