"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Cities = () => {
  const [queryParams, setQueryParams] = useState({
    limit: 8,
    offset: 0,
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
          params: queryParams,
          headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        });
        setCountries(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [queryParams]);

  const handleInputChange = () => {
    const inputName = document.getElementById("inputName");
    setQueryParams({
      ...queryParams,
      namePrefix: inputName.value,
      offset: 0,
    });
  };

  return (
    <section className="w-screen flex flex-col items-center justify-center">
      <div className="bg-secondary text-contrast p-4 container">
        <h1 className="text-xl mb-2">Cities</h1>
        <div className="text-sm w-full flex gap-2 mb-4">
          <input
            className="w-full rounded-md px-2 py-1"
            id="inputName"
            placeholder="City Name..."
          />
          <div
            onClick={handleInputChange}
            className="py-1 px-2 bg-alert rounded-md"
          >
            Search
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
          {countries.map((city) => (
            <div
              className="bg-primary p-2 rounded-lg"
              key={city.wikiDataId + Math.round(Math.random() * 1000)}
            >
              <p className="text-xs">{city.wikiDataId}</p>
              <h1 className="text-lg font-bold">{city.name}</h1>
              <p className="text-xs">
                <a>{city.region}</a>,{" "}
                <a
                  className="underline hover:text-alert"
                  href={`/countries/${city.countryCode}`}
                >
                  {city.country}
                </a>
              </p>
              <a
                href={`/cities/${city.id}`}
                className="py-1 px-2 bg-alert rounded-md text-sm float-end"
              >
                More
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div
            className="py-1 px-2 bg-alert rounded-md text-sm"
            onClick={() => {
              setQueryParams({
                ...queryParams,
                offset: queryParams.offset - 8,
              });
            }}
          >
            Prev
          </div>
          <div
            className="py-1 px-2 bg-alert rounded-md text-sm"
            onClick={() => {
              setQueryParams({
                ...queryParams,
                offset: queryParams.offset + 8,
              });
            }}
          >
            Next
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
