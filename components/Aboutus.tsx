"use client";
import React from "react";
import Image from "next/image";


export default function AboutUs() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center p-8 bg-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left p-8 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-slate-900">
          <h2 className="text-3xl md:text-5xl font-bold inter-var text-slate-900">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-slate-800 font-medium">
            We are a consultancy agency specializing in providing innovative
            solutions for modern businesses. Our mission is to empower
            organizations with the tools and strategies they need to thrive in
            the digital world.
          </p>
          <p className="text-base text-slate-800">
            At alȧẋit, we combine expertise in technology, business processes,
            and strategy to offer cutting-edge solutions that drive measurable
            results. Our team is passionate about delivering personalized
            services that exceed expectations.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0 pl-2 sm:pl-20"> {/* Adjusted alignment */}
          <Image
            src="/banner2.jpg"
            alt="Consultancy Team"
            width={500}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
