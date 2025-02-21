"use client";
import { disconnectIntegrate, onOAuthInstagram } from "@/actions/integrations";
import { onUserInfo } from "@/actions/user";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import useConfirm from "@/hooks/use-confirm";
import { useMutationData } from "@/hooks/use-mutation-data";
import { capitalize } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM" | "WHATSAPP";
  isActive: boolean;
};

const IntegrationCard = ({
  description,
  icon,
  strategy,
  title,
  isActive,
}: Props) => {
  const router = useRouter();

  const [ConfirmDialog, confirm] = useConfirm(
    "Before you proceed!",
    `Due to our app limitations, we strongly advise you to use clone ${capitalize(
      strategy
    )} accounts to avoid unfortunate consequences`
  );
  const onInstaOAuth = async () => {
    const ok = await confirm();
    if (!ok) return;
    onOAuthInstagram(strategy);
  };

  const { data } = useQuery({
    queryKey: ["user-profile"],
    queryFn: onUserInfo,
  });

  const { mutate, isPending: isDeleting } = useMutationData(
    ["update-keyword"],
    async (data: { id: string }) => {
      return await disconnectIntegrate(data.id);
    },
    "automation-info"
  );

  const integrated = data?.data?.integrations.find(
    (integration: { name: string }) => integration.name === strategy
  );

  return (
    <>
      <ConfirmDialog />
      <MagicCard
        classNameChild="flex justify-between items-center gap-4 w-full"
        className={`flex border-2 ${
          isActive ? "" : "border-gray-600"
        } rounded-2xl gap-x-5 p-5`}
      >
        {icon}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl"> {title}</h3>
          <p className="text-[#9D9D9D] text-base ">{description}</p>
        </div>
        {integrated ? (
          <Button
            onClick={() => {
              mutate(
                { id: integrated.id },
                {
                  onSuccess: () => router.refresh(),
                }
              );
            }}
            disabled={isDeleting}
            className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
          >
            {isDeleting ? (
              <Loader size={16} className="animate-spin" />
            ) : (
              "Disconnect"
            )}
          </Button>
        ) : isActive ? (
          <Button
            onClick={onInstaOAuth}
            className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
          >
            Connect
          </Button>
        ) : (
          <div className="font-medium">Coming Soon</div>
        )}
      </MagicCard>
    </>
  );
};

export default IntegrationCard;
