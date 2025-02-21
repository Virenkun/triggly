"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import Loader from "../loader";
import {
  AutomationColor,
  AutomationDuoToneBlue,
  AutomationDuoToneWhite,
} from "@/icons";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";
import { RainbowButton } from "@/components/magicui/rainbow-button";

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), []);

  const { isPending, mutate } = useCreateAutomation(mutationId);

  return (
    <RainbowButton
      disabled={isPending}
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 rounded-full font-semibold"
      onClick={() =>
        mutate({
          name: "Untitled",
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      {isPending ? (
        <div>Creating Automation...</div>
      ) : (
        <>
          {" "}
          <AutomationDuoToneWhite />
          <p className="lg:inline hidden ml-4">Create an Automation</p>
        </>
      )}
    </RainbowButton>
  );
};

export default CreateAutomation;
