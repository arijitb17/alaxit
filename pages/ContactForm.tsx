import 'tailwindcss/tailwind.css';
import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      setStatus("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      } else {
        setStatus("Failed to send message.");
        toast.error("Failed to send message.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10 mb-10 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-3xl font-semibold text-gray-800 text-center">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="text-lg font-medium text-gray-700 absolute left-4 top-0 transform -translate-y-6">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="relative">
            <label htmlFor="email" className="text-lg font-medium text-gray-700 absolute left-4 top-0 transform -translate-y-6">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="relative">
            <label htmlFor="phone" className="text-lg font-medium text-gray-700 absolute left-4 top-0 transform -translate-y-6">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="text-lg font-medium text-gray-700 absolute left-4 top-0 transform -translate-y-6">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              rows={5}
              placeholder="Write your message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        {status && (
          <div className={`text-center mt-4 font-semibold ${status.includes("successfully") ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
