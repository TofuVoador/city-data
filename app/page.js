import React from "react";

const Home = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center">
      <div className="text-center bg-contrast py-8 px-16 rounded-full">
        <h1 className="text-xl sm:text-3xl text-primary font-bold">Welcome to CityData</h1>
        <p className="text-sm sm:text-lg text-secondary">
          Your ultimate destination for city insights and information
        </p>
      </div>
    </section>
  );
};

export default Home;
