"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const axios = require("axios");

const CountryDetails = (params) => {
  const countryID = params.params.countryID;
  let [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/" + countryID,
          headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        });
        setCountryData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-screen flex flex-col items-center justify-center">
      <div className="bg-secondary text-contrast p-2 container ">
        <h1 className="text-xl">{countryData.name}</h1>
        <p className="text-sm">{countryData.capital}</p>
        <img className="max-w-xs" src={countryData.flagImageUri} alt={countryData.name + " Flag"} />
      </div>
    </section>
  );
};

export default CountryDetails;
