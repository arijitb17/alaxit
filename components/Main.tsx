import React from 'react';
import Hr from './Hr';


const Main: React.FC = () => {
  return (
    <section className="relative bg-[url('/banner.jpg')] bg-cover bg-top h-screen flex items-center overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-20 p-10 rounded-lg relative z-10">
        <div className="text-left text-white px-10">
         
        </div>

        {/* Service Features */}
        <div>
          <div className="grid grid-cols-1 gap-8">
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

      
    </section>
    
  );
};

export default Main;
