import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button'; // Import the custom Button component

const ApplicationDevelopmentConsultingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 ">
      <h1 className="text-4xl font-bold text-black mb-8">Application Development Consulting</h1>
      <div className="flex flex-col items-center justify-center mb-8">
        <Image
          src="/appdev.jpg" // Updated image URL
          alt="Application Development"
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg text-slate-800 mb-4">
          We provide the following application development consulting services helping organizations design, develop, and implement custom software applications to meet their specific business needs, improve efficiency, enhanced user experience, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Custom Application Development</h2>
          <p className="text-lg text-slate-800 mb-4">
            Building tailored software applications from scratch.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Application Migration or Modernization</h2>
          <p className="text-lg text-slate-800 mb-4">
            Upgrading or re-architecting legacy applications to modern technologies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mobile Application Development</h2>
          <p className="text-lg text-slate-800 mb-4">
            Creating mobile apps for Android and iOS devices.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">SaaS / Cloud Application Development</h2>
          <p className="text-lg text-slate-800 mb-4">
            Building cloud-based applications using platforms like AWS, Azure, or Google Cloud.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">DevOps Consulting</h2>
          <p className="text-lg text-slate-800 mb-4">
            Implementing DevOps practices to improve application development, testing, and deployment.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/ContactForm"> 
          <Button className="hover:animate-pulseGrow">Schedule a Consultation</Button> 
        </Link>
      </div>

    </div>
  );
};

export default ApplicationDevelopmentConsultingPage;