import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
// import response from "../response.json";

async function Homepage() {
  // const news: NewsResponse = response | (await fetchNews(categories.join(",")));
  const news: NewsResponse = await fetchNews(categories.join(","));
  // joins or list all categories

  console.log(news);
  return <div>{/*NewsList component  */}</div>;
}

export default Homepage;
