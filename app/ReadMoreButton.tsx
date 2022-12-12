"use client";

import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    // mapping through all the articles taking parameters showing the one that is chosen

    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    //   constructs url based on reader query
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
