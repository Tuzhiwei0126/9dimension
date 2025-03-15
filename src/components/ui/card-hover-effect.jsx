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
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8",
        className
      )}
    >
      {items.map((item, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center justify-center p-4"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center w-full">
            {item.icon && (
              <img 
                src={item.icon} 
                alt={item.name || "合作伙伴"} 
                className="max-h-24 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            )}
          </div>
          {item.name && !showOnlyIcons && (
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white/10 dark:bg-slate-950/50 border border-neutral-200/20 dark:border-slate-800/50 group-hover:border-neutral-300 dark:group-hover:border-slate-700 transition-all duration-300 relative z-20 shadow-sm",
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
    <div className={cn("w-16 h-16 mb-4", className)}>
      {typeof src === "string" && src.endsWith(".svg") ? (
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={64}
          height={64}
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

export function PartnerShowcase({ partners, className }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-3"
          >
            <div className="flex items-center justify-center h-24 w-full">
              <img
                src={partner.icon}
                alt={partner.name || "合作伙伴"}
                className="max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            {partner.name && (
              <div className="mt-2 text-center">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{partner.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SimplePartnerGrid({ partners, className, columns = 5 }) {
  return (
    <div className={cn("w-full", className)}>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${columns} gap-6`}>
        {partners.map((partner, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-3"
          >
            <img
              src={partner.icon}
              alt={partner.name || "合作伙伴"}
              className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategorizedPartners({ categories, className }) {
  return (
    <div className={cn("w-full space-y-12", className)}>
      {categories.map((category, i) => (
        <div key={i} className="space-y-4">
          {category.title && (
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">{category.title}</h3>
          )}
          <SimplePartnerGrid partners={category.partners} columns={category.columns || 5} />
        </div>
      ))}
    </div>
  );
}
