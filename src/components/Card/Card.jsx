import React from "react";


function Card() {
  const datawork = [
    {
      id: 1,
      name: "first",
      image: "",
      description: "lorem20",
      demolink: "",
      codelink: "",
    },
    {
      id: 2,
      name: "first",
      image: "",
      description: "lorem20",
      demolink: "",
      codelink: "",
    },
    {
      id: 3,
      name: "first",
      image: "",
      description: "lorem20",
      demolink: "",
      codelink: "",
    },
    {
      id: 4,
      name: "first",
      image: "",
      description: "lorem20",
      demolink: "",
      codelink: "",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-4">
        {datawork.map((work, index) => {
          return (
            <div className="w-[300px] h-[400px] mx-auto bg-violet-600">
              <div className="w-full h-full" key={index}>
                <img
                  src={work.image}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto "
                />
                <p className="text-center text-[24px] font-bold text-white">
                  {work.name}
                </p>
                <p className="text-center text-[16px]  text-white">
                  {work.description}
                </p>
                <div className="flex relative w-full h-full">
                  <div className="absolute top-20 left-14">
                    <button className="text-white px-3 py-2 bg-cyan-950 mr-3">
                      <a href="">Demo</a>
                    </button>
                    <button className="text-white px-3 py-2 bg-cyan-950">
                      <a href="">Source Code </a>
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
