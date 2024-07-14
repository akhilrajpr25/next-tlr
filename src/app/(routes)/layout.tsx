"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Dropdown from "../_components/Dropdown";
import MainBar from "../_components/Home/HomeNavBars/MainBar/MainBar";
import SubBar from "../_components/Home/HomeNavBars/SubBar/SubBar";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <MainBar />
      <hr className="border border-gray-200 mr-20" />
      <SubBar />
      <div>{children}</div>
    </>
  );
};

export default Homelayout;
