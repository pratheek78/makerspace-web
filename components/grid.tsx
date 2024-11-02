// @ts-nocheck 

import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { RxRulerSquare } from "react-icons/rx";
import Image from "@/node_modules/next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton imageSrc={item.imageSrc} />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ imageSrc }) => (
  <div className="relative w-full h-full">
    <Image
      src={imageSrc}
      alt="avatar"
      layout="fill"
      objectFit="cover"
      className="w-full h-full object-cover"
    />
  </div>
);
const items = [
  {
    title: "Learn",
    description: "Add description later",
    imageSrc:"/main2.jpeg",
    className: "md:col-span-2",
    icon: <RxRulerSquare />
  },
  {
    title: "Tinker",
    description: "Add description later",
    imageSrc:"/main1.jpeg",
    className: "md:col-span-1",
  },
  {
    title: "Innovate",
    description: "Add description later",
    imageSrc:"/slide2.jpeg",
    className: "md:col-span-1",
  },
  {
    title: "Showcase",
    description:
      "Add description later",
      imageSrc:"/drone.jpeg",
    className: "md:col-span-2",
  },
];
