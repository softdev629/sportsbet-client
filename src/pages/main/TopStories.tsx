import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  startLoading,
  finishLoading,
  failedLoading,
} from "../../redux/articlesSlice";
import { Article } from "../../redux/articlesSlice";

const TopStories = () => {
  const dispatch = useAppDispatch();
  const topArticles = useAppSelector((state) =>
    state.articles.articles.slice(0, 3)
  );

  useEffect(() => {
    dispatch(startLoading());
    axios
      .get("/top-headlines.json")
      .then((response) => {
        const { data } = response;

        const articles = data.articles.map((article: Article) => {
          return {
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            author: article.author,
            publishedAt: article.publishedAt,
          };
        });

        dispatch(finishLoading(articles));
      })
      .catch((err) => dispatch(failedLoading(err.message)));
  }, []);

  return (
    <div className="mb-4">
      <h2 className="text-[var(--ui-primary-font-color)] font-bold font-serif text-2xl mb-6">
        Top Stories
      </h2>
      {topArticles &&
        topArticles.map((topArticle, index) => (
          <div key={index}>
            <Link to={`/news/${index}`}>
              <div className="my-4">
                <div className="flex">
                  <div className="flex grow">
                    <p className="text-primary text-xl font-bold flex-[0_0_2rem] mb-4">
                      {index + 1}
                    </p>
                    <div className="text-darkgrey hover:text-mediumgrey">
                      {topArticle.title}
                    </div>
                  </div>
                  {topArticle.urlToImage && (
                    <div className="break-all flex-[0_0_calc(25%+16px)] pl-4">
                      <img src={topArticle.urlToImage} alt="NONE" />
                    </div>
                  )}
                </div>
              </div>
            </Link>
            {index < topArticles.length - 1 && <hr className="opacity-25" />}
          </div>
        ))}
    </div>
  );
};

export default TopStories;
