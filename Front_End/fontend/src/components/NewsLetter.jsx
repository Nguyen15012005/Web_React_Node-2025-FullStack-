import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Subscribed with: ${email}`);
      setEmail(""); // Clear input after subscription
    }, 2000);
  };

  return (
    <section className="w-full py-12 xl:py-28 bg-white">
      <div className="mx-auto flexCenter flex-col gap-y-8 w-full px-4 lg:px-8">
        <h3 className="h3">Get Exclusive offers on Your Email</h3>
        <h4 className="uppercase bold-18">
          Subscribe to our newsletter and stay updated
        </h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]">
          <input
            className="w-full bg-transparent ml-7 border-none outline-none regular-16"
            type="email"
            placeholder="Your email address"
            aria-label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn_dark_rounded"
            onClick={handleSubscribe}
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
