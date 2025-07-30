import React from "react";
import ExpertAvatars from "./ExpertAvatars";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "security first",
      description:
        "We follow secure coding best practices, implement encryption, and comply with fintech regulations.",
    },
    {
      title: "Domain Expertise",
      description:
        "We understand the challenges in fintech—regulations, fraud prevention, trust building—and build solutions to solve them.",
    },
    {
      title: "Agile & Scalable",
      description:
        "From MVPs to enterprise grade systems, we move fast and build to scale.",
    },
    {
      title: "Real Collaboration",
      description:
        "Think of us as your tech partner not just a vendor. We’re in it to grow with you",
    },
  ];

  return (
    <div className="py-18 px-10 md:px-0 max-w-full md:max-w-[1080px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-bold text-3xl capitalize mb-4">Why Choose Us</h2>

          <div className="pr-20">
            At Kuunda, we blend innovation with reliability to deliver
            cutting-edge digital solutions tailored to your business goals. Our
            team of experienced developers, designers, and strategists is
            committed to building scalable, secure, and user-friendly technology
            that drives real results
          </div>
          <div className="flex items-center gap-4 justify-start flex-wrap my-10">
            <ExpertAvatars />{" "}
            <div className="text-base font-semibold ">Our Team of Experts</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((item, i: number) => (
              <div key={i} className="relative mb-14 desf">
                <div
                  className={`absolute text-7xl font-bold text-slate-100  -left-5 -top-10`}>
                  0{i + 1}
                </div>
                <h3 className="font-bold text-xl capitalize z-5 relative mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
