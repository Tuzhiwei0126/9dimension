"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ img, title, description, content }) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="relative group/card dark:hover:shadow-2xl border-black/[0.1] w-auto sm:w-[30rem] bg-white/30 h-auto rounded-2xl p-6 border  transition-all duration-300 ">
        <CardItem
          translateZ="80"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="100"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="150" className="w-full mt-4">
          <Image
            src={img || "/images/product3.JPEG"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl bg-transparent hover:scale-[1.02] transition-transform duration-300"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={40}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
            {content}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
