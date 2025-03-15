"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Smart Education",
    description: {
      sections: [
        {
          title: "University AI Course Practice",
          points: [
            "Students access computing power directly through web interface, no local setup required",
            "Provides image classification, NLP and other teaching templates to lower learning barriers"
          ]
        },
        {
          title: "Multi-GPU Training",
          points: [
            "Life science protein structure prediction models achieve 40% faster convergence",
            "Shared environment repository improves collaboration efficiency by 60%"
          ]
        },
        {
          title: "Flexible Computing Resources",
          points: [
            "Computational physics coursework supports MPI parallel framework",
            "Students can submit assignments online and view real-time logs",
            "Elastic computing power guarantees peak demand without hardware procurement pressure"
          ]
        }
      ]
    },
    content: (
      <div className="h-full w-full flex items-center justify-center text-white rounded-3xl">
        <Image
          src="/images/edu.png"
          width={280}
          height={280}
          className="h-full w-full rounded-2xl"
          alt="Smart Education visualization" />
      </div>
    ),
  },
  {
    title: "Smart Scale",
    description: {
      sections: [
        {
          title: "Dense Computing Power",
          points: [
            "Computing density reaches 1.5 PFLOPS per cabinet, 7x improvement over traditional solutions",
            "Extreme efficiency of 300 FLOPS/WATT, 6x better than conventional approaches"
          ]
        },
        {
          title: "Ultra-Fast Response",
          points: [
            "Second-level task response time",
            "Revolutionary breakthrough compared to minute-level responses in traditional systems"
          ]
        },
        {
          title: "Scalable Architecture",
          points: [
            "Seamless scaling from small deployments to massive clusters",
            "Intelligent resource allocation optimizes utilization across workloads"
          ]
        }
      ]
    },
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/scale.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Smart Scale visualization" />
      </div>
    ),
  },
  {
    title: "Smart Storage",
    description: {
      sections: [
        {
          title: "AI & Machine Learning",
          points: [
            "Model training and inference optimization",
            "PB-level dataset storage with GPU acceleration"
          ]
        },
        {
          title: "High-Performance Computing",
          points: [
            "Supercomputing center parallel I/O support",
            "Handles tens of thousands of concurrent file accesses"
          ]
        },
        {
          title: "Financial Services",
          points: [
            "Real-time trading and risk control analysis",
            "Highly reliable storage architecture meeting compliance requirements"
          ]
        },
        {
          title: "Media & Entertainment",
          points: [
            "4K/8K video rendering and streaming",
            "High throughput with multi-tenant isolation"
          ]
        }
      ]
    },
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/sto.png"
          width={270}
          height={270}
          className="h-full w-full object-cover"
          alt="Smart Storage visualization" />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
