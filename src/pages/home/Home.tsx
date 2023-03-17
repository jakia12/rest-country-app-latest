import React, { useEffect, useState } from "react";
import axios from "axios";
import { country } from "../../models/models";

const Home = () => {
  const [countries, setCountries] = useState<country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      const countryData = await res.data;

      console.log(countryData);
      //pass the country data to the countries state
      setCountries(countryData);
      //hide spinner once data is loaded
      setIsLoading(false);
    };

    fetchCountry();
  }, []);

  return (
    <>
      {/* header section */}

      {/* fiter and sorting section */}
      <section className="py-14">
        <div className="container mx-auto w-full md:max-w-7xl px-6">
          <div className="flex ites-center justify-between">
            <div className="flex items-center">
              <button className="py-2.5 px-6 bg-teal-400 text-white hover:bg-rose-400 rounded-lg text-sm font-normal mr-3">
                Filter by region
              </button>
              <button className="py-2.5 px-6 bg-teal-400 text-white hover:bg-rose-400 rounded-lg text-sm font-normal">
                Filter small region
              </button>
            </div>
            <button className="py-2.5 px-6 bg-teal-400 text-white hover:bg-rose-400 rounded-lg text-sm font-normal">
              Sort by name
            </button>
          </div>
        </div>
      </section>

      {/* countries card lists */}

      <section className="py-10">
        <div className="container mx-auto w-full md:max-w-7xl px-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Flag
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Capital
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Language
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Region
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src="
                    "
                      alt=""
                      className="w-30 h-30 rounded-md"
                    />
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
