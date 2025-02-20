import { AuroraText } from "@/components/magicui/aurora-text";
import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="radial--gradient lg:w-4/12 w-full py-5 lg:py-10 flex flex-col items-center">
            <p className="text-text-secondary text-xl">Welcome back</p>
            <AuroraText className="capitalize text-6xl font-semibold">
              {decodeURIComponent(slug ? slug : "user").replace(/[-_]/g, " ")}!
            </AuroraText>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
