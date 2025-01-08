import React from 'react';

const Main: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-900 to-purple-800 h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="text-left text-white px-10">
          <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var">
            <span className="text-blue-500">alȧẋ</span>
            <span className="text-gray-900">it</span>
          </p>

          <p className="text-base md:text-lg mt-4 text-gray-100 font-bold inter-var">
            LET US MANAGE YOUR IT.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-8"> {/* Maintain single column on all screen sizes */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-700">
                Describe the service and how customers or clients can benefit from it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
              <p className="text-gray-700">
                Describe the service and how customers or clients can benefit from it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">24/7 Support and Monitoring</h3>
              <p className="text-gray-700">
                Describe the service and how customers or clients can benefit from it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 w-full h-full"
      > 
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="lines" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 0 L10 10" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" /> 
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>
    </section>
  );
};

export default Main;