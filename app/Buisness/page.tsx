import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button'; // Import the custom Button component

const BusinessAdvisoryServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 ">
      <h1 className="text-4xl font-bold text-black mb-8">Business Advisory Services</h1>
      <div className="flex flex-col items-center justify-center mb-8">
        <Image
          src="/buis.jpg" // Replace with relevant image URL
          alt="Business Advisory Services"
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg text-slate-800 mb-4">
          We provide the following business advisory services with our expert guidance and support to help organizations setting up new business, right from feasibility study till operational, and for existing businesses to improve their performance, overcome challenges, and achieve their goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Strategy Development</h2>
          <p className="text-lg text-slate-800 mb-4">
            Helping businesses develop and implement strategic plans to achieve their goals.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Operational Improvement</h2>
          <p className="text-lg text-slate-800 mb-4">
            Identifying areas for improvement and implementing changes to increase efficiency and productivity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Financial Advisory</h2>
          <p className="text-lg text-slate-800 mb-4">
            Providing guidance on financial management, planning, and reporting.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Risk Management</h2>
          <p className="text-lg text-slate-800 mb-4">
            Helping businesses identify and mitigate risks that could impact their operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Legal & Human Resources Advisory</h2>
          <p className="text-lg text-slate-800 mb-4">
            Providing guidance on legal, HR-related matters, such as corporate legal compliance, talent management, organizational development.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mergers and Acquisitions</h2>
          <p className="text-lg text-slate-800 mb-4">
            Advising businesses on buying, selling, or merging with other companies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Digital Transformation</h2>
          <p className="text-lg text-slate-800 mb-4">
            Helping businesses adapt to digital changes and implement new technologies.
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

export default BusinessAdvisoryServicesPage;