import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Enter your email");
    toast.success("Subscribed!");
    
    setEmail("");
  };

  return (
    <section className="w-full bg-green-50 py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-3">
          Never Miss a Deal
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Subscribe to get early access to latest deals, discounts and collections
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
