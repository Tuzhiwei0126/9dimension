"use client";

import { TextAnimate } from "./text-animate";

export function TextAnimateDemo9() {
  return (
    <TextAnimate
    className="text-6xl font-bold flex justify-center items-center h-full z-10"
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
  );
}
