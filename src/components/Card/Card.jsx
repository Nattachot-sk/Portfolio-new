import React from "react";


function Card() {
  const datawork = [
    {
      id: 1,
      name: "first portfolio",
      image: "",
      description: "lorem20",
      demolink: "https://first-porfolio-henna.vercel.app/",
      githublink: "https://github.com/ntc-dodo/First-Porfolio",
    },
    {
      id: 2,
      name: "new portfolio",
      image: "./project/port-new.PNG",
      description: "lorem20",
      demolink: "https://portfolio-new-chi-cyan.vercel.app/",
      githublink: "https://github.com/ntc-dodo/Portfolio-new.git",
    },
    {
      id: 3,
      name: "first",
      image: "",
      description: "lorem20",
      demolink: "",
      githublink: "",
    },

  ];
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {datawork.map((work, index) => {
          return (
            <div className="w-[400px] h-[450px] mx-auto bg-violet-600 hover:scale-110 duration-300">
              <div className="w-full h-full" key={index}>
                <img
                  src={work.image}
                  alt=""
                  className="w-full h-[200px] mx-auto "
                />
                <p className="text-center text-[24px] font-bold text-white">
                  {work.name}
                </p>
                <p className="text-center text-[16px]  text-white">
                  {work.description}
                </p>
                <div className="flex relative w-full h-full">
                  <div className="absolute flex top-32 left-[70px]">
                    <button className="text-white px-3 py-2 bg-cyan-950 mr-3 hover:bg-black">
                      <a href={work.demolink} target="_blank" className="px-5 py-3">Demo</a>
                    </button>
                    <button className="text-white px-3 py-2 bg-cyan-950 hover:bg-black">
                      <a href={work.githublink} target="_blank" className="px-5 py-3">Source Code </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
