import React from "react";
import PaymentButton from "../payment-button";
import { BRAND } from "@/constants/common";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card } from "@/components/ui/card";

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <Card className="w-[200px] bg-transparent">
      <ShineBorder
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        className="flex flex-col min-w-[200px] bg-transparent p-4 gap-4"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-medium leading-relaxed text-transparent">
            Unlock Premium Features
          </span>

          <p className="text-sm text-gray-300 text-center font-light">
            Get unlimited access to all {BRAND} premium features and tools.
          </p>
        </div>
        <PaymentButton />
      </ShineBorder>
    </Card>
  );
};

export default UpgradeCard;
