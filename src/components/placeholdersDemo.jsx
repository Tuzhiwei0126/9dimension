"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("网站咨询");
    const body = encodeURIComponent(`我想了解更多关于: ${e.target.value}`);
    const mailtoLink = `mailto:fangyi@9dimension.tech?subject=${subject}&body=${body}`;
      
    // 打开邮件客户端
    window.location.href = mailtoLink;
    
    // 清空输入框
    setInputValue("");
    console.log("submitted");
  };
  return (
    (<div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>)
  );
}
