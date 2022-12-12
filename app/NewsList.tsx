import React from "react";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};
function NewsList({ news }: Props) {
  return (
    <main className="grid grid-col01 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
