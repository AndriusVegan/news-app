import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  // joins or list all categories

  console.log(news);
  return <div>{/*NewsList component  */}</div>;
}

export default Homepage;
