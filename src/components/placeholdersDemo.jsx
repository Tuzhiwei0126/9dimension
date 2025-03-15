"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const [inputValue, setInputValue] = useState("");
  
  const placeholders = [
    "How can we collaborate on AI solutions?",
    "I'd like to discuss a potential partnership",
    "Where is your office located in Beijing?",
    "What are your technical consulting services?",
    "How to arrange a meeting with your team?",
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("网站咨询");
    const body = encodeURIComponent(`我想了解更多关于: ${inputValue}`);
    const mailtoLink = `mailto:fangyi@9dimension.tech?subject=${subject}&body=${body}`;
      
    // 打开邮件客户端
    window.location.href = mailtoLink;
    
    // 清空输入框
    setInputValue("");
    console.log("submitted");
  };
  
  return (
    (<div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Contact Us for Collaboration
      </h2>
      <PlaceholdersAndVanishInput 
        placeholders={placeholders} 
        onChange={handleChange} 
        onSubmit={onSubmit}
        value={inputValue} 
      />
    </div>)
  );
}
