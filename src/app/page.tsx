"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);
  return (
    <div className="animate-pulse p-10">
      <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-1 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-12 bg-gray-300 rounded w-full mb-4"></div>
      {Array(10)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="h-6 bg-gray-300 rounded w-full mb-4"
          ></div>
        ))}
    </div>
  );
}
