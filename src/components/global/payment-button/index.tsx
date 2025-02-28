import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import { CreditCardIcon, Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <RainbowButton
      disabled={isProcessing}
      onClick={onSubscribe}
      className="gap-2"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </RainbowButton>
  );
};

export default PaymentButton;
