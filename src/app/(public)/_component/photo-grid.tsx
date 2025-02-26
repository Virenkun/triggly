import Image from "next/image";
import React from "react";

type Props = {};

export default function PhotoGrid({}: Props) {
  return (
    <section className="mx-auto max-w-7xl text-center px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
        <div className="w-full aspect-auto">
          <Image
            src="/vhuwan.jpeg"
            alt="Community members"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-xl rounded-br-[40px] md:rounded-br-[80px] shadow-2xl"
          />
        </div>
        <div className="w-full aspect-auto">
          <Image
            src="/carry.jpeg"
            alt="Community members"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-xl shadow-2xl rounded-br-[40px] rounded-tr-[40px] md:rounded-br-[80px] md:rounded-tr-[80px]"
          />
        </div>
        <div className="w-full aspect-auto">
          <Image
            src="/koli.jpeg"
            alt="Community members"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-xl shadow-2xl rounded-tl-[40px] md:rounded-tl-[80px]"
          />
        </div>
        <div className="w-full aspect-auto">
          <Image
            src="/Jimmy.jpeg"
            alt="Community members"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-xl shadow-2xl rounded-br-[50px] md:rounded-br-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
