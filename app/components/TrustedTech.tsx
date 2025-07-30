import React from "react";

import react_logo from "@/app/assets/tech/flutter.png";
import firebase_logo from "@/app/assets/tech/firebase.png";
import nodejs_logo from "@/app/assets/tech/node.png";
import postgresql_logo from "@/app/assets/tech/postgress.png";
import aws_logo from "@/app/assets/tech/aws.png";
import nextjs_logo from "@/app/assets/tech/nextjs.jpeg";
import docker_logo from "@/app/assets/tech/docker.webp";
import flutter_logo from "@/app/assets/tech/flutter.png";
import mongo from "@/app/assets/tech/mongo.png";
import solidity from "@/app/assets/tech/solidity.png";
import python from "@/app/assets/tech/python.jpg";
import web3js from "@/app/assets/tech/web3js.jpg";
import Image from "next/image";

const TrustedTech = () => {
  const tech = [
    react_logo,
    firebase_logo,
    nodejs_logo,
    postgresql_logo,
    aws_logo,
    nextjs_logo,
    docker_logo,
    flutter_logo,
    mongo,
    solidity,
    python,
    web3js,
  ];

  return (
    <div className="py-18 bg-slate-100">
      <h2 className="font-bold text-3xl text-center">Trusted Tech</h2>
      <div className="flex items-center gap-10 justify-center flex-wrap mt-10">
        {tech.map((tech, index: number) => (
          <div key={index}>
            <Image
              src={tech.src}
              width={60}
              height={60}
              alt="tech"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedTech;
