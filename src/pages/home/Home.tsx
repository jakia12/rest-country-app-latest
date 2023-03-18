import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { country } from "../../models/models";

const Home = () => {
  //state to store coutries
  const [countries, setCountries] = useState<country[]>([]);

  //show spinner
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [text, setText] = useState<string>();

  //sort the coutry by name
  const [sortedName, setSortedName] = useState("");

  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const countryData = await res.data;

      console.log(countryData);
      //slice the country into 100
      const slicedCountries = countryData.slice(0, 100);

      //pass the country data to the countries state
      setCountries(slicedCountries);
      //hide spinner once data is loaded
      setIsLoading(false);
    };

    fetchCountry();
  }, []);

  //sort country by name
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("clicked");
    setIsSorted(true);

    const data = e.target as HTMLSelectElement | undefined;
    const optionValue = data?.value;

    console.log(typeof optionValue);

    //sort the data ascendedly
    const ascendedCountries = countries.sort((a: country, b: country) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;

      setCountries(ascendedCountries);
    });
    //sort the data des
    // const des = countries.sort((a, b) => {
    //   if (optionValue === "DSC") {
    //     console.log(optionValue);
    //     setCountries(ascendedCountries);
    //   } else {
    //     return;
    //   }
    // });

    //return a.name.common.localCompare(b.name.common);

    //console.log(sortedCountries);
  };

  return (
    <>
      {/* header section */}

      {/* fiter and sorting section */}
      <section className="py-14">
        <div className="container mx-auto w-full md:max-w-7xl px-6 lg:px-8">
          <div className="flex ites-center justify-between">
            <div className="flex items-center">
              <button className="py-3 px-6 bg-tealLight text-white hover:bg-roseLight rounded-lg text-sm font-normal mr-4">
                Filter by region
              </button>
              <button className="py-3 px-6 bg-tealLight text-white hover:bg-roseLight rounded-lg text-sm font-normal">
                Filter small region
              </button>
            </div>
            <select
              className="py-3 px-6 bg-tealLight text-white hover:bg-roseLight rounded-lg text-sm font-normal capitalize"
              onChange={handleChange}
            >
              <option value="">Sort By name</option>
              <option value="ASC" className="option_design">
                Ascending
              </option>
              <option value="DSC" className="option_design">
                Descending
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* countries card lists */}

      <section className="py-10">
        <div className="container mx-auto w-full md:max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Area
                  </th>
                </tr>
              </thead>
              <tbody>
                {countries?.map((country) => (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4">
                      {country.name ? country.name : "No data Available"}
                    </td>
                    <td className="px-6 py-4">
                      {country.region ? country.region : "No data Available"}
                    </td>
                    <td className="px-6 py-4">
                      {country.area ? country.area : "No data Available"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
