import Link from 'next/link';
import Hr from './Hr';

const Card: React.FC<{ link: string }> = ({ link }) => {
  return (
    <Link href={link}>
      <div className="relative group bg-gradient-to-r from-blue-900 via-black to-blue-800 rounded-lg p-20 sm:p-20 md:p-40 shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-700 via-black to-blue-600 opacity-40 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
        <div className="absolute inset-0 z-0 bg-[url('/pattern.svg')] bg-center bg-no-repeat opacity-20 group-hover:opacity-40 rounded-lg transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center"></div>
      </div>
    </Link>
  );
};

export function Cards() {
  return (
    <div className="py-8">
      <Hr className="mb-10" />
      <div>
        <h1 className="text-slate-800 text-4xl px-4 sm:px-10 mb-10 sm:mb-20">What we Offer</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 px-4 sm:px-8 text-slate-900">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-10 group-hover:text-blue-300 transition-colors duration-300">
            Digital Services
          </h3>
          <Card link="/Digitalservice" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card link="/Appdev" />
          <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-10 group-hover:text-blue-300 transition-colors duration-300">
            Application Development
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-10 group-hover:text-blue-300 transition-colors duration-300">
            Project and Process Consulting
          </h3>
          <Card link="/Proj" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card link="/Buisness" />
          <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-10 group-hover:text-blue-300 transition-colors duration-300">
            Business Advisory Services
          </h3>
        </div>
      </div>
    </div>
  );
}
