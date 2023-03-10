import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

const OneNews = () => {
  const params = useParams();
  const article = useAppSelector((state) => {
    if (params.id !== undefined)
      return state.articles.articles.at(parseInt(params.id));
  });
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (article?.url === undefined) return;
    if (content !== "") return;
    setLoading(true);
    axios
      .post(
        "http://localhost:9000/api/get-article",
        { address: article.url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setContent(res.data.output);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <div className="container px-3">
        <h1 className="font-bold my-10 text-4xl tracking-tight">
          {article?.title}
        </h1>
        <h2 className="text-xl tracking-tight">{article?.description}</h2>
        <hr className="my-4 opacity-25" />
        <div className="flex justify-center">
          {article?.urlToImage && (
            <img className="mb-6" src={article.urlToImage} />
          )}
        </div>
        {loading && <div>Generating article...</div>}
        {!loading && <p>{content}</p>}
      </div>
    </main>
  );
};

export default OneNews;
