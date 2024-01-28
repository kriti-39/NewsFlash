import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <>
      <h2 className="text-center">
        <span
          className="badge bg-danger "
          style={{ margin: "15px", padding: "17px", fontSize: "30px" }}
        >
          Latest News
        </span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItems
            key={index}
            titles={news.titles}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </>
  );
};

export default NewsBoard;
