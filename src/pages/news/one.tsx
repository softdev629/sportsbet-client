import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

interface ARTICLE {
  title: string;
  description: string;
  content: string;
}

const OneNews = () => {
  const params = useParams();
  const article = useAppSelector((state) => {
    if (params.id !== undefined)
      return state.articles.articles.at(parseInt(params.id));
  });
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({
    title: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    if (article?.url === undefined) return;
    if (content.title !== "") return;
    setLoading(true);
    axios
      .post(
        "http://localhost:9000/api/get-article",
        {
          address: article.url,
          title: article.title,
          description: article.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      });
  }, []);

  const generatedContent = (content: ARTICLE) => {
    return (
      <>
        <h1 className="font-bold my-10 text-4xl tracking-tight">
          {content.title}
        </h1>
        <h2 className="text-xl tracking-tight">{content.description}</h2>
        <hr className="my-4 opacity-25" />
        <div className="flex justify-center">
          {article?.urlToImage && (
            <img className="mb-6" src={article.urlToImage} />
          )}
        </div>
        <div>{content.content}</div>
      </>
    );
  };

  return (
    <main>
      <div className="container px-3">
        {loading && (
          <div className="flex justify-center text-[72px]">
            Generating article...
          </div>
        )}
        {!loading && generatedContent(content)}
      </div>
    </main>
  );
};

export default OneNews;
