import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button'; // Import the custom Button component

const ProjectAndProcessConsultingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 ">
      <h1 className="text-4xl font-bold text-black mb-8">Project & Process Consulting</h1>
      <div className="flex flex-col items-center justify-center mb-8">
        <Image
          src="/proj.jpg" // Replace with relevant image URL
          alt="Project & Process Consulting"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg text-slate-800 mb-4">
          We provide project management and process improvement consulting services to help organizations improve their operational efficiency, effectiveness, and adaptability by analyzing and optimizing their business processes and with better project management support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Business Process Re-engineering (BPR)</h2>
          <p className="text-lg text-slate-800 mb-4">
            Fundamental transformation of business processes to achieve dramatic improvements.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Process Improvement</h2>
          <p className="text-lg text-slate-800 mb-4">
            Identifying and addressing inefficiencies in existing processes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Process Design</h2>
          <p className="text-lg text-slate-800 mb-4">
            Creating new processes or redesigning existing ones to meet changing business needs.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Process Automation</h2>
          <p className="text-lg text-slate-800 mb-4">
            Implementing technology to automate manual processes and improve efficiency.
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

export default ProjectAndProcessConsultingPage;