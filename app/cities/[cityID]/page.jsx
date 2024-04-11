"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CityDetails = (params) => {
  const cityID = params.params.cityID;
  let [cityData, setCityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/" + cityID,
          headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        });
        console.log(response.data.data);
        setCityData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-screen flex flex-col items-center justify-center">
      <div className="bg-secondary text-contrast p-2 container ">
        <h1 className="text-xl">{cityData.name}</h1>
        <p className="text-sm mb-4">
          <a>{cityData.region}</a>,{" "}
          <a
            className="underline hover:text-alert"
            href={`/countries/${cityData.countryCode}`}
          >
            {cityData.country}
          </a>
        </p>
        <p className="text-sm">
          {cityData.latitude >= 0
            ? `${cityData.latitude}N`
            : `${-cityData.latitude}S`}{" "}
          {cityData.longitude >= 0
            ? `${cityData.longitude}E`
            : `${-cityData.longitude}W`}
        </p>
      </div>
    </section>
  );
};

export default CityDetails;
