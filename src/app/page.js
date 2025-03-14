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
    <div className="flex flex-col min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start h-screen w-full flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="flex flex-col justify-center items-center z-10 absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center gap-6">
            <TextAnimateDemo9 />
            <PlaceholdersAndVanishInputDemo />
          </div>
        </div>
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto px-4">
          <ThreeDCardDemo img="/images/product3.png" title="SmartStorage" description="AI/HPC-optimized storage with extreme performance, limitless scalability, and financial-grade security" content="产品1型号参数"/>
          <ThreeDCardDemo img="/images/product2.png"  title="AI Education All-in-One" description="Integrated AI+HPC platform for universities, empowering teaching and research with smart resource orchestration" content="产品2型号参数"/>
          <ThreeDCardDemo img="/images/product1.png"  title="AI Education All-in-One" description="Expert solutions optimizing storage and AI training efficiency to overcome performance bottlenecks." content="产品3型号参数"/>
        </div>
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <StickyScrollRevealDemo />
        </div>
      </section>
    
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto px-4">
          <TweetDemo id="1899460492999184534" />
          <TweetDemo id="1899136943348441564" />
          <TweetDemo id="1899136943348441564" />
        </div>
      </section>
      
      <section className="snap-start w-full flex items-center justify-center">
      {/* <AnimatedBeam /> */}
        <HomeFooter />
      </section>
      
      <section className="snap-start w-full flex items-center justify-center pt-0 pb-10">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-medium">Beijing:</span>
              <span>2nd Floor, Sohu Network Building, No. 1 Zhongguancun, Haidian District</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Shanghai:</span>
              <span>Room 303, Lester School, North Bund, Hongkou District</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Phone:</span>
              <a href="tel:+8613911118689" className="hover:text-white transition-colors">+86 139 1111 8689</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <a href="mailto:fangyi@9dimension.tech" className="hover:text-white transition-colors">fangyi@9dimension.tech</a>
            </div>
          </div>
        </div>
      </section>
      {/* <AuroraBackground /> */}
      {/* <BackgroundGradientAnimation /> */}
      {/* <HeroParallax /> */}
    </div>
  );
}
