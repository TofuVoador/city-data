import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About CityData</h1>
      <div className="mb-8">
        <p className="mb-4">
          Welcome to CityData, a portfolio project aimed at providing valuable
          insights into cities around the world using GeoDB Cities API from
          RapidAPI.
        </p>
        <p>
          Thank you for visiting CityData. We're excited to be part of your
          journey in exploring the world's cities.
        </p>
      </div>
      <div className="border-t-2 border-gray-300 pt-8">
        <h2 className="text-xl font-bold mb-4">Contact the Author</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <img
              src="author.jpg"
              alt="Author"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Gustavo Amamia Kumagai</h3>
            <p>Email: iagamuk.gus@gmail.com</p>
            <p>Phone: +55 44 988150190</p>
            <p>
              Github:{" "}
              <a
                className="hover:text-alert"
                href="https://github.com/TofuVoador"
              >
                @TofuVoador
              </a>
            </p>
          </div>
          {/* Add more contact information here */}
        </div>
      </div>
    </div>
  );
};

export default About;
