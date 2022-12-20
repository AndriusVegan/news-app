import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function Homepage() {
  // fetch the news data
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));
  // const news: NewsResponse = await fetchNews(categories.join(","));
  // joins or list all categories

  // console.log(news);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
