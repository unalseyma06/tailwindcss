import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-screen bg-[#0a192f] w-full">
      <div className="flex flex-col justify-center h-full mx-auto max-w-[1000px] px-8">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-[#ccd6f6] text-4xl sm:text-7xl font-bold ">
          John Price
        </h1>
        <h2 className="text-[#8892b0] text-4xl sm:text-7xl font-bold">
          I'm Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus
          nisi, sint recusandae aspernatur blanditiis adipisci fugit incidunt
          sit libero maxime consequatur architecto aliquid excepturi doloribus
          voluptas ipsam dicta error?
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
