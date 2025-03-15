import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={icons} showOnlyIcons={true} />
    </div>)
  );
}

// 只保留图标信息
export const icons = [
  {
    icon: "/images/清华大学.svg",
  },
  {
    icon: "/images/人大.svg",
  },
  {
    icon: "/images/海普logo.svg",
  },
  {
    icon: "/images/曙光.svg",
  },
  {
    icon: "/images/紫光.svg",
  },
  {
    icon: "/images/戴尔.svg",
  },
  {
    icon: "/images/英特尔.svg",
  },
  {
    icon: "/images/英伟达.svg",
  },
  {
    icon: "/images/IBM.svg",
  },
  {
    icon: "/images/dlea.svg",
  },
];
