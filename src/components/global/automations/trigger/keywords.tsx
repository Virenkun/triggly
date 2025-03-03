"use client";

import { Input } from "@/components/ui/input";
import { useKeywords } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/user-queries";
import { Info, Loader2 } from "lucide-react";
import React from "react";
import KeywordItem from "./keyword-item";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
};

export const Keywords = ({ id }: Props) => {
  const { onValueChange, keyword, onKeyPress, deleteMutation } =
    useKeywords(id);
  const { latestVariable } = useMutationDataState(["add-keyword"]);
  const { latestVariable: latesDeleteVariable } = useMutationDataState([
    "delete-keyword",
  ]);
  const { data } = useQueryAutomation(id);

  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word.id !== latestVariable?.variables?.id && (
                <KeywordItem
                  key={word.id}
                  word={word}
                  automationId={id}
                  isDeleting={latesDeleteVariable?.variables?.id === word.id}
                  onDelete={() => deleteMutation({ id: word.id })}
                />
              )
          )}
        {latestVariable && latestVariable.status === "pending" && (
          <div className="cursor-progress relative bg-background-90 flex items-center gap-x-2   text-text-secondary py-1 px-4 rounded-full">
            <div className="absolute inset-0 bg-gray-500 opacity-50 rounded-full" />
            <p>{latestVariable.variables.keyword}</p>
            <span className="text-white rounded-full">
              <Loader2 size={12} className="animate-spin" />
            </span>
          </div>
        )}
        <div className="flex gap-2">
          <Input
            placeholder="Add keyword..."
            value={keyword}
            className="p-2 bg-transparent ring-0 border-white"
            onChange={onValueChange}
            onKeyUp={onKeyPress}
          />
          <Button
            onClick={() =>
              onKeyPress({
                key: "Enter",
              } as React.KeyboardEvent<HTMLInputElement>)
            }
          >
            Add
          </Button>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Info size={20} />
          <div className="text-xs text-text-secondary">
            After entering a keyword press Enter or Click on Add Button
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
