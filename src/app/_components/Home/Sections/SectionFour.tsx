import React from "react";

const data = {
  title: "Add title here",
  summary: "Add summary here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam ex at elit volutpat ornare. Integer ultrices mattis diam, ut tempus lorem auctor lobortis. Proin et sodales tortor, non sagittis nisi. Sed vitae convallis dui. Proin ut diam erat. Morbi a nunc ac lorem sagittis vestibulum ut id ligula. In vel nisl pharetra, ullamcorper tellus vel, lobortis ligula. Praesent hendrerit volutpat nibh, nec accumsan quam. Aliquam malesuada ornare mauris id semper. Suspendisse semper bibendum velit, et auctor ante tempus sed. Donec commodo ex non diam hendrerit, nec mattis ipsum fermentum. Quisque id rhoncus ipsum.",
  note: "Add note here",
};

const SectionFour = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mb-20">
      <div className="bg-gray-100 h-96"></div>
      <div className="space-y-4">
        <div className="font-bold">{data?.title}</div>
        <div className="font-light">{data?.summary}</div>
        <div className="text-sm font-semibold">{data?.description}</div>
        <div className="text-sm italic">{data?.note}</div>
      </div>
    </div>
  );
};

export default SectionFour;
