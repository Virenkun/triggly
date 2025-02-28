import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  page: string;
  slug: string;
};

const Items = ({ page, slug }: Props) => {
  return SIDEBAR_MENU.map((item) => {
    const isHome = item.label === "home";
    const isActive = isHome ? page === slug : page === item.label;

    return (
      <Link
        key={item.id}
        href={`/dashboard/${slug}${isHome ? "" : `/${item.label}`}`}
        className={cn(
          "capitalize flex gap-x-3 gap-y-3 rounded-lg px-4 py-3",
          isActive
            ? "bg-black/50 backdrop-blur-3xl text-white"
            : "text-[#9B9CA0]"
        )}
      >
        {isActive ? item.iconActive : item.icon}
        {item.label}
        {isActive && (
          <div className="flex-1 flex self-center justify-end">
            <div className="w-[2px] h-4 bg-violet-700" />
          </div>
        )}
      </Link>
    );
  });
};

export default Items;
