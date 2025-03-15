"use client";

import { TextAnimate } from "./text-animate";

export function TextAnimateDemo9() {
  return (
    <div className="flex flex-col items-center mt-70">
      <TextAnimate
        className="text-9xl font-medium flex justify-center items-center h-full z-10 tracking-tighter"
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            rotate: 45,
            scale: 0.5,
          },
          show: (i) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
              delay: i * 0.1,
              duration: 0.4,
              y: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                mass: 0.8,
              },
              rotate: {
                type: "spring",
                damping: 8,
                stiffness: 150,
              },
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 300,
              },
            },
          }),
          exit: (i) => ({
            opacity: 0,
            y: 30,
            rotate: 45,
            scale: 0.5,
            transition: {
              delay: i * 0.1,
              duration: 0.4,
            },
          }),
        }}
        by="character"
      >
        Great things coming soon
      </TextAnimate>
      
      <p className="text-gray-500 mt-20 text-xl tracking-wide">
      our exciting new products and services
      </p>
    </div>
  );
}
