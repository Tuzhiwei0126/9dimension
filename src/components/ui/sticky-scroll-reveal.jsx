"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-950)",
    "var(--neutral-950)",
    "var(--zinc-950)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const renderDescription = (description) => {
    if (typeof description === 'string') {
      return <p>{description}</p>;
    }
    
    if (description.sections) {
      return (
        <div className="description-sections">
          {description.sections.map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{section.title}</h3>
              <ul className="list-disc pl-5">
                {section.points.map((point, pidx) => (
                  <li key={pidx} className="mb-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-16 rounded-md p-12"
      ref={ref}>
      <div className="div relative flex items-start px-6">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-extrabold text-zinc-300 tracking-tight leading-tight drop-shadow-md">
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-zinc-400 max-w-md mt-8 leading-relaxed font-medium drop-shadow">
                {renderDescription(item.description)}
              </motion.div>
            </div>
          ))}
          <div className="h-48" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-80 w-96 rounded-lg bg-white sticky top-16 overflow-hidden shadow-2xl border border-white/20",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
