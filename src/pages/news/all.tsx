import TopStories from "../main/TopStories";
import { useAppSelector } from "../../hooks/reduxHooks";
import { NavLink } from "react-router-dom";

const AllNews = () => {
  const topArticles = useAppSelector((state) => state.articles.articles);

  return (
    <main>
      <div className="container px-3">
        <div className="flex mt-4 space-x-3">
          <div className="basis-7/12">
            {topArticles.map((topArticle, index) => (
              <>
                <div
                  className="grid grid-cols-[minmax(0,calc(35%))_1fr] grid-rows-[auto_minmax(0,1fr)] gap-x-8 py-4"
                  style={{
                    gridTemplateAreas: `"image headline" "image description"`,
                  }}
                  key={index}
                >
                  <img
                    src={
                      topArticle.urlToImage
                        ? topArticle.urlToImage
                        : "/assets/img/WGFPJZZVLNDY5O3R5VIBCC5TXM.avif"
                    }
                    alt="Load Failed"
                    style={{ gridArea: "image" }}
                  />
                  <div
                    className="text-[26px] leading-[32px] mb-2"
                    style={{ gridArea: "headline" }}
                  >
                    <NavLink to={`/news/${index}`}>{topArticle.title}</NavLink>
                  </div>
                  <div
                    className="flex text-[0.875rem]"
                    style={{ gridArea: "description" }}
                  >
                    <section>
                      <span className="text-[#3b3b3b]">By</span>{" "}
                      <span className="font-bold text-[#434343]">
                        {topArticle.author ? topArticle.author : "Unknown"}
                      </span>{" "}
                      <span className="mx-2">●</span>
                    </section>
                    <time className="text-darkgrey text-[14px]">
                      March 10, 2023 at 10:22 am EST
                    </time>
                  </div>
                </div>
                {index < topArticles.length - 1 && (
                  <hr className="opacity-25" />
                )}
              </>
            ))}
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-1/3">
            <TopStories />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllNews;
