import Image from "next/image";
import AnimatedBackground from "@/components/AnimateBackground";
import { TextAnimateDemo9 } from "@/components/magicui/textShow";
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";
import { PlaceholdersAndVanishInputDemo } from "@/components/placeholdersDemo";
import { StickyScrollRevealDemo } from "@/components/stickyDemo";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { TweetDemo } from "@/components/tweet";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import HomeFooter from "@/components/homeFooter";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Divide } from "lucide-react";
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <div className="flex flex-col justify-center items-center z-10 mt-40">
  
        <div className="">
          <TextAnimateDemo9 />
          <PlaceholdersAndVanishInputDemo />
        </div>
      </div>
      <div className="py-10 mt-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <div className="py-10 h-screen">
        <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
        </div>
      </div>
      <div className="h-screen py-10">
        <StickyScrollRevealDemo />
      </div>
    
      <div className="h-screen py-10">
      <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
      <TweetDemo />
      <TweetDemo />
      <TweetDemo />
        </div>

      </div>
      <HomeFooter />
      {/* <AuroraBackground /> */}
      {/* <BackgroundGradientAnimation /> */}
      {/* <HeroParallax /> */}
    </div>
  );
}
