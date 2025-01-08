import React from "react";
import Hr from "./Hr";
import Image from "next/image"; // Import Image from next/image

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "The Digital Services consultation helped my business establish a strong online presence. The personalized strategies provided were exceptional!",
    image: "/profile/p1.jpg",  // Ensure you update the image path accordingly
  },
  {
    name: "Priya Patel",
    feedback:
      "The Application Development team turned our ideas into reality with an intuitive app. The development process was smooth and efficient!",
    image: "/profile/p3.jpg",  // Ensure you update the image path accordingly
  },
  {
    name: "Rajesh Kumar",
    feedback:
      "The Business Advisory Services helped me streamline my operations and improve profitability. The expert guidance made a huge difference.",
    image: "/profile/p2.jpg",  // Ensure you update the image path accordingly
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <Hr className="mb-10" />
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <Image
                src={testimonial.image} // Using next/image component
                alt={testimonial.name}
                width={80} // Set the width
                height={80} // Set the height
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 italic">&quot;{testimonial.feedback}&quot;</p> {/* Escaped quotes */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
