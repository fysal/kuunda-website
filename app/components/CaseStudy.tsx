import Image from "next/image";
import React from "react";
import phone from "@/app/assets/phone.png";
const CaseStudy = () => {
  const techStack = ["Flutter", "Node.js", "PostgreSQL", "AWS"];
  const features = [
    "Credit scoring",
    "disbursement engine",
    "SMS & email alerts",
    "admin dashboard",
  ];

  return (
    <div className="border border-gray-200 rounded-lg py-10 px-5 my-8 text-white bg-[var(--primary)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="p-4 ">
          <h1 className="text-3xl font-bold mb-2">Case Study</h1>
          <div className="mb-14 mt-5">
            Scaling a Mobile Payments App in East Africa “In just 3 months, we
            helped a Ugandan startup launch a loan management app with 10,000+
            users and integrated KYC/credit checks using Smile Identity.”
          </div>
          <div className="grid grid-cols-4  ">
            <div className="font-semibold text-base">Tech stack:</div>
            <div className="col-span-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="badge bg-slate-200 text-xs border-slate-300 mb-2 text-gray-800 capitalize mr-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4  mt-4">
            <div className="font-semibold text-base">Features:</div>
            <div className="col-span-3">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="badge bg-slate-200 text-xs border-slate-300 mb-2 text-gray-800 capitalize mr-2">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={phone.src}
          width={900}
          height={900}
          alt="Phone"
          unoptimized
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default CaseStudy;
