"use client";
import React from "react";
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
      <hr className="border border-gray-200 w-11/12" />
      <SubBar />
      <div className="mt-5">{children}</div>
    </>
  );
};

export default Homelayout;
