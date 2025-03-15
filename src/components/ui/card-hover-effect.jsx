"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function HoverEffect({ items, className, showOnlyIcons = false }) {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 gap-4",
        className
      )}
    >
      {items.map((item, i) => (
        <div 
          key={i} 
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-neutral-200/20 dark:border-slate-800/30 block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="flex items-center justify-center h-24 w-full p-4 rounded-xl bg-white/5 dark:bg-slate-950/30 border border-neutral-200/10 dark:border-slate-800/30">
            {item.icon && (
              <img 
                src={item.icon} 
                alt="合作伙伴" 
                className="max-h-50 max-w-50 w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white/10 dark:bg-slate-950/50 backdrop-blur-sm border border-neutral-200/20 dark:border-slate-800/50 group-hover:border-neutral-300 dark:group-hover:border-slate-700 transition-all duration-300 relative z-20 shadow-sm",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardIcon = ({ src, alt, className }) => {
  return (
    <div className={cn("w-10 h-10 mb-4", className)}>
      {typeof src === "string" && src.endsWith(".svg") ? (
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-slate-900 dark:text-zinc-100 font-bold tracking-wide mt-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-6 text-slate-700 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
