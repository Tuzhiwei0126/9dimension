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

// 修改公司信息数据为英文
const companyInfo = {
  locations: [
    {
      city: "Beijing",
      address: "2nd Floor, Sohu Network Building, No. 1 Zhongguancun, Haidian District",
      image: "/images/map1.png"
    },
    {
      city: "Shanghai",
      address: "Room 303, Lester School, North Bund, Hongkou District",
      image: "/images/map2.png"
    }
  ],
  contact: {
    phone: "+86 139 1111 8689",
    email: "support@9dimension.tech"
  },
  qrCodes: [
    {
      name: "Official Account",
      image: "/images/chat2.png"
    },
    {
      name: "Tech Channel",
      image: "/images/chat.png"
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start h-screen w-full flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="absolute top-4 left-12 z-20">
          <div className="flex items-center">
            <Image src="/images/logo.svg" alt="jiuwei Logo" width={120} height={40} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center z-10 absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center gap-6">
            <TextAnimateDemo9 />
            <PlaceholdersAndVanishInputDemo />
          </div>
        </div>
      </section>
      
      {/* <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section> */}
      
      <section className="snap-start h-screen w-full flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          <span className="relative inline-block">
            <span className="relative z-10">Our Products</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </span>
        </h1>
        <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto px-4">
          
          <ThreeDCardDemo img="/images/product3.png" title="SmartStorage" description="AI/HPC-optimized storage with extreme performance, limitless scalability, and financial-grade security"/>
          <ThreeDCardDemo img="/images/product2.png"  title="SmartStation" description="Integrated AI+HPC platform for universities, empowering teaching and research with smart resource orchestration" />
          <ThreeDCardDemo img="/images/product1.png"  title="SmartScale" description="Expert solutions optimizing storage and AI training efficiency to overcome performance bottlenecks."/>
        </div>
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
            <span className="relative inline-block">
              <span className="relative z-10">Our Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <StickyScrollRevealDemo />
        </div>
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
            <span className="relative inline-block">
              <span className="relative z-10">Our Partners</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <CardHoverEffectDemo />
        </div>
      </section>
    
      {/* <section className="snap-start h-screen w-full flex items-center justify-center py-10">
        <div className="flex flex-row justify-center items-center gap-8 max-w-7xl mx-auto px-4">
          <TweetDemo id="1899460492999184534" />
          <TweetDemo id="1899136943348441564" />
          <TweetDemo id="1899136943348441564" />
        </div>
      </section> */}
      
      <section className="snap-start w-full flex items-center justify-center">
      {/* <AnimatedBeam /> */}
        <HomeFooter />
      </section>
      
      {/* 优化底部区域布局和内容格式 */}
      <section className="snap-start min-h-screen w-full flex items-center justify-center py-4 relative overflow-hidden">
        {/* 保持白色30%透明度背景 */}
        <div className="absolute inset-0 bg-white/20 backdrop-filter backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>
        
        <div className="w-full mx-auto px-8 md:px-12 relative z-10">
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center">
              <span className="relative inline-block">
                <span className="relative z-10">ABOUT US</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center border border-blue-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 ml-3">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-grow">
                  Jiuwei Turing (Shanghai) Technology Co., Ltd. specializes in innovation in the field of intelligent computing. Since its establishment, the company has been dedicated to the intelligent computing field, with technological innovation as its core driving force, focusing on providing cutting-edge solutions for AI and HPC scenarios.
                </p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-400/20 flex items-center justify-center border border-purple-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 ml-3">Core Advantage</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-grow">
                  Our core advantage is an intelligent computing data center operating system that integrates "heterogeneous computing + high network bandwidth + high-performance distributed storage", providing powerful computing power for AI and HPC scenarios from the infrastructure level.
                </p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600/20 to-cyan-400/20 flex items-center justify-center border border-cyan-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 ml-3">Our Products</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-grow">
                  The smart computing product family under Jiuwei Digital Intelligence aims to achieve efficient resource scheduling, green and low-carbon facilities, flexible computing power supply, and intelligent on-demand services, empowering high-quality development of industries and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyInfo.locations.map((location, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500/50 transition-all duration-300 shadow-md h-full">
                  <div className="flex flex-col h-full">
                    <div className="h-36 overflow-hidden">
                      <Image 
                        src={location.image} 
                        alt={`${location.city} Office`} 
                        width={300} 
                        height={200} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{location.city} Office</h3>
                      <p className="text-gray-700 text-sm">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-3 bg-white/50 backdrop-blur-md rounded-xl p-5 border border-gray-200 shadow-md flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">CONTACT US</h3>
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center mr-4 border border-blue-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Phone</p>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-400/20 flex items-center justify-center mr-4 border border-purple-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-gray-900 hover:text-purple-600 transition-colors font-medium">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white/50 backdrop-blur-md rounded-xl p-5 border border-gray-200 shadow-md flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">FOLLOW US</h3>
              <div className="flex justify-center gap-8">
                {companyInfo.qrCodes.map((qrCode, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-2 p-1 bg-white rounded-lg shadow-sm">
                      <Image 
                        src={qrCode.image} 
                        alt={qrCode.name} 
                        width={100} 
                        height={100} 
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{qrCode.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300/50 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
              <div className="flex items-center mb-4 md:mb-0">
                <Image src="/images/logo.svg" alt="jiuwei Logo" width={90} height={30} />
                <span className="ml-3 text-gray-600 text-sm">© {new Date().getFullYear()} Jiuwei Technology. All rights reserved.</span>
              </div>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* 保留柔和的装饰性元素 */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl z-0"></div>
      </section>
      
      {/* <AuroraBackground /> */}
      {/* <BackgroundGradientAnimation /> */}
      {/* <HeroParallax /> */}
    </div>
  );
}
