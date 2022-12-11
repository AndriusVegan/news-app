import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query

  const query = gql`
    query MyQuery(
      $access_key: String!
      $catagories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // fetch function with next js
  const res = await fetch(
    `https://manville.stepzen.net/api/awesome-kudu/__graphql`,
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log(
    "LOADING NEW DATA FROM API for category >>>>",
    category,
    keywords
  );
  //   return res;
  const newsResponse = await res.json();

  // sort by images and no images
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return the news
  return news;
};

export default fetchNews;

// run in the terminal stepzen import curl "url below"
// http://api.mediastack.com/v1/news?access_key=d374024a3dc67b6dfbc235e022f8f71f also could add categories at the end
