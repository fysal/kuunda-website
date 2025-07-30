import React from "react";

const HeroSecton = () => {
  return (
    <div
      className="hero min-h-[700px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content  text-neutral-content text-center">
        <div className="max-w-[800px]">
          <h1 className="mb-2 text-5xl font-bold">
            Building the Future of Fintech
          </h1>
          <h2 className="text-3xl font-bold mb-5">
            One Line of Code at a Time
          </h2>
          <div className="mb-10 text-xl">
            We design and develop secure, scalable, and user-friendly fintech
            software from digital wallets and mobile banking apps to payment
            platforms and blockchain systems.
          </div>
          <div className="flex item-center justify-center gap-5 flex-wrap">
            <a
              href="#"
              className="p-3 border border-[var(--primary)] text-center rounded bg-[var(--primary)] text-white">
              Book a Free Consultation
            </a>
            <a
              href="#"
              className="py-3 px-4 border text-center rounded bg-slate-200 text-gray-800">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecton;
