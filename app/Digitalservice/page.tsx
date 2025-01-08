import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';

const DigitalServicePage = () => {
  return (
    <div className="container mx-auto py-10 px-4"> 
      <h1 className="text-4xl font-bold text-black mb-8">Grow Your Business Online: Effective Digital Marketing Solutions</h1>
      <div className="flex flex-col items-center justify-center mb-6">
        <Image
          src="/digserv.jpg" 
          alt="Digital Marketing"
          width={600}
          height={200}
          className="rounded-lg mb-4"
        />
        <p className="text-lg text-slate-800 mb-4 mt-10">
          Boost visibility, engagement, and conversions with our data-driven digital marketing services. We help businesses of all sizes achieve their online goals through a comprehensive suite of services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Website Design & Development</h2>
          <p className="text-lg text-slate-800 mb-4">
            Craft a stunning and user-friendly website that reflects your brand and drives conversions. Our experienced developers create websites optimized for search engines and mobile devices. 
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Search Engine Optimization (SEO)</h2>
          <p className="text-lg text-slate-800 mb-4">
            Increase your website&apos;s visibility in search engine results pages (SERPs) for relevant keywords. Our SEO experts will help you attract organic traffic and grow your online presence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Social Media Marketing</h2>
          <p className="text-lg text-slate-800 mb-4">
            Reach your target audience and build brand awareness through engaging social media campaigns. Our experts will help you create compelling content and run targeted ads.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Content Marketing</h2>
          <p className="text-lg text-slate-800 mb-4">
            Create valuable, relevant, and consistent content that attracts and engages your target audience. Our team will help you develop and implement a winning content strategy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Email Marketing</h2>
          <p className="text-lg text-slate-800 mb-4">
            Build relationships and nurture leads with targeted email campaigns. Our experts will help you craft compelling email content and optimize your email marketing strategy.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Video Marketing</h2>
          <p className="text-lg text-slate-800 mb-4">
            Create engaging video content that captures attention and drives results. Our team will help you plan, produce, and promote your video marketing campaigns.
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

export default DigitalServicePage;
