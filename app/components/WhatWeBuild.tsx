import {
  BanknotesIcon,
  BoldIcon,
  ChevronUpDownIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  FingerPrintIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const WhatWeBuild = () => {
  const iconSize = "size-6"; // Define icon size for consistency
  const icons = [
    <BanknotesIcon key={0} className={iconSize} />,
    <CurrencyDollarIcon key={1} className={iconSize} />,
    <CreditCardIcon key={2} className={iconSize} />,
    <ChevronUpDownIcon key={3} className={iconSize} />,
    <FingerPrintIcon key={4} className={iconSize} />,
    <BoldIcon key={3} className={iconSize} />,
  ];

  const features = [
    {
      title: " Digital Wallets & Payments",
      description:
        "Build secure peer-to-peer payment platforms, mobile wallets, and seamless integrations with payment APIs (e.g., Flutterwave, Stripe, Paystack).",
    },
    {
      title: "Mobile Banking Apps",
      description:
        "Launch full-featured banking apps with onboarding, account management, and real-time transactions.",
    },
    {
      title: "Lending & Microfinance Platforms",
      description:
        "Custom credit scoring, loan disbursement, repayment logic, and dashboards for lenders and borrowers.",
    },
    {
      title: "Blockchain & Crypto Solutions",
      description:
        "Smart contract development, token creation, crypto wallets, and DeFi platforms.",
    },
    {
      title: "RegTech Integrations",
      description:
        "Embed ID verification, biometric KYC, transaction monitoring, and reporting tools to ensure compliance.",
    },
    {
      title: "Fintech APIs & Microservices",
      description:
        "Develop fast, modular backends that scale using REST, GraphQL, and WebSockets.",
    },
  ];

  return (
    <div className="py-18 max-w-[1080px] mx-auto">
      <h2 className="font-bold text-center text-3xl">What we build</h2>
      <p className="text-center">
        Custom Software Tailored for Fintech Innovation
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-md mx-auto my-4 p-4 border border-[var(--primary)] rounded-lg shadow-lg relative">
            <div className="absolute left-3 -top-5 text-white p-3 rounded bg-[var(--primary)]">
              {icons[index]}
            </div>
            <h3 className="font-bold text-xl mt-5 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeBuild;
