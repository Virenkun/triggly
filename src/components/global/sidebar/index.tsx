"use client";
import { usePaths } from "@/hooks/use-nav";
import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import { HelpDuoToneWhite, LogoutIconRed } from "@/icons";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div
      className="w-[250px] 
  
    radial 
    fixed 
    left-0 
    lg:inline-block
   
    bg-gradient-to-b from-[#768BDD] 
    via-[#171717]
     to-[#768BDD] 
     hidden 
     bottom-0 
     top-0 
     
    
     overflow-hidden"
    >
      <div
        className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-6 
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <h1 className="text-3xl font-bold text-white">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
              Triggly
            </span>{" "}
          </h1>
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col gap-6 justify-end">
            <UpgradeCard />
            <LogOut />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

const LogOut = () => {
  return (
    <div className="flex gap-3 items-center">
      <LogoutIconRed />
      <div className="font-semibold text-red-600">Log Out</div>
    </div>
  );
};

export default Sidebar;
