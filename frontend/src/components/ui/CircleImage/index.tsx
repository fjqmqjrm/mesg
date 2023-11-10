import Image from "next/image";
import React from "react";
import example from "/public/images/example.png";

export default function CircleImage() {
  return (
    <div className="relative w-fit flex justify-center items-center">
      <div className="absolute w-[2.3125rem] h-[2.3125rem] bg-brandColor rounded-full top-3 left-3"></div>
      <Image
        src={example}
        alt="example"
        className=" rounded-full w-[11.375rem] h-[11.375rem]"
      />
    </div>
  );
}
