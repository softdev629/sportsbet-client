import React from "react";

const SampleTemplateTSX = () => {
  return (
    <main className="text-primaryfont">
      <div className="container px-3">
        <h1 className="font-bold font-primarybold mb-2 text-[2.75rem] tracking-tight">
          Travis Kelce's 'Saturday Night Live' Hosting Highlighted by Brother
          Jason's Performance - The Philadelphia Inquirer
        </h1>
        <h2 className="text-[26px] font-primary tracking-tight">
          {
            "Jason appeared in a couple of sketches and Saturday night's opening monologue alongside their parents, Ed and Donna."
          }
        </h2>
        <hr className="my-4 opacity-25" />
        <div className="flex mt-4 space-x-3">
          <div className="basis-7/12">
            <img
              className="mb-6"
              src="/assets/img/WGFPJZZVLNDY5O3R5VIBCC5TXM.avif"
            />
            <section className="font-secondary mb-2">
              <span>By </span>
              <span className="font-secondarybold text-primary">Nick</span>
            </section>
            <time
              className="font-secondary text-darkgrey"
              dateTime="2023-03-14T17:41:44.517Z"
            >
              March 14, 2023 at 1:41 pm EDT
            </time>
            <article className="text-primaryfont mt-4">
              <p className="mb-6 font-secondary">
                Saturday Night Live (SNL) had a special guest host last night,
                Kansas City Chiefs tight end Travis Kelce. Not only did he bring
                his parents, Ed and Donna, but his older brother, Eagles center
                Jason Kelce, also made an appearance.
              </p>
              <p className="mb-6 font-secondary">
                The Kelce brothers had a bit of a rivalry going into the Super
                Bowl, with Travis' Chiefs ultimately coming out on top. During
                his opening monologue, Travis joked that it was "pretty awkward"
                beating his brother in the big game, but that Jason was still
                happy for him. He also took a jab at the Eagles, referencing the
                controversial late penalty called against cornerback James
                Bradberry.
              </p>
              <p className="mb-6 font-secondary">
                Jason also made an appearance in a skit later in the show,
                playing the boyfriend of Travis' character. When Travis'
                character was being bothered by someone else, Jason stepped in
                and offered to beat him up.
              </p>
              <p className="mb-6 font-secondary">
                Travis is the 12th NFL player or coach to host SNL, joining the
                likes of Joe Montana, John Madden, and Tom Brady. He seemed
                comfortable in most of his sketches, which shouldn't come as too
                much of a shock. In addition to playing himself in the
                short-lived Showtime comedy Moonbase 8, Travis also once starred
                in the E! network dating show Catching Kelce.
              </p>
              <p className="mb-6 font-secondary">
                Jason also appeared in a pre-filmed NFL commercial parody
                alongside his brother and Chiefs lineman Creed Humphrey, but it
                was cut from the show due to time constraints.
              </p>
              <p className="mb-6 font-secondary">
                Next weekend, Wednesday star Jenna Ortega will host SNL, with
                English pop rock band The 1975 as the musical guest. It will be
                interesting to see if any of the Kelce brothers make an
                appearance.
              </p>
            </article>
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-1/3">
            <img
              className="mb-6"
              src="https://www.inquirer.com/resizer/iyruTveNtQU-HTS9OV0GweEc4Vk=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/WCPE2BYN6ZA3RHAOCCEGCA77NA.jpg"
            />
            <img
              className="mb-6"
              src="https://cdn.vox-cdn.com/thumbor/uB4UWsWRv5OAktDUGYFWNsP8GgA=/0x0:5932x3106/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24480061/usa_today_20145824.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SampleTemplateTSX;
