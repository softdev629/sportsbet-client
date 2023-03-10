import React from "react";
import TopStories from "./TopStories";

const MainPage = () => {
  return (
    <main>
      <div className="container px-3">
        <div className="flex mt-4 space-x-3">
          <div className="basis-7/12">
            <img
              className="aspect-[4/3]"
              src="/assets/img/WGFPJZZVLNDY5O3R5VIBCC5TXM.avif"
            />
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

export default MainPage;
