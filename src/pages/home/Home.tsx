import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { country } from "../../models/models";
import CountryListItem from "../../components/countryListItem/CountryListItem";
import { Blocks } from "react-loader-spinner";

const Home = () => {
  //state to store coutries
  const [countries, setCountries] = useState<country[]>([]);

  //show spinner
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [text, setText] = useState<string>();

  //sort the coutry by name
  const [sortedName, setSortedName] = useState("");

  //sorting boolean
  const [selected, setSelected] = useState<string>("");
  //filter smallr area than lithuania
  const [areaNumber, setAreaNumber] = useState<number | undefined>();
  //filter oceania region
  const [regionName, setRegionName] = useState<string>("");

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const countryData = await res.data;

      console.log(countryData);
      //slice the country into 100

      //pass the country data to the countries state
      setCountries(countryData);
      //hide spinner once data is loaded
      setIsLoading(false);
    };

    fetchCountry();
  }, []);

  //sort country by name
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("clicked");

    const data = e.target as HTMLSelectElement;
    const optionValue = data?.value;

    setSelected(optionValue);
    //sort the data ascendedly

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

  // //filter small area than lithuania
  const handleFilterSmallArea = () => {
    const lithuaniaArea = 65300.0;
    setAreaNumber(lithuaniaArea);
    console.log(areaNumber);
  };
  // //filter oceania region
  const handleFilterOceania = () => {
    const filteredRegion = "Oceania";

    setRegionName(filteredRegion);
  };

  //set all filter at a time

  const transformedCountries = () => {
    let modifiedCountries = countries;

    //filter smaller area than lithuania

    if (areaNumber) {
      modifiedCountries = countries.filter(
        (country) => country.area < areaNumber
      );
    } else {
      modifiedCountries = countries;
    }

    //filter oceania region
    if (regionName) {
      modifiedCountries = modifiedCountries.filter(
        (country) => country.region === "Oceania"
      );
    } else {
      modifiedCountries = countries;
    }

    //sort by name ascendng or descending
    if (selected) {
      modifiedCountries = modifiedCountries.sort((a, b) => {
        const isSorted = selected === "ASC" ? 1 : -1;
        return isSorted * a.name.localeCompare(b.name);
      });
    }

    return modifiedCountries;
  };

  const filterdCountries = transformedCountries();
  return (
    <>
      {/* header section */}

      {/* fiter and sorting section */}
      <section className="py-14">
        <div className="container mx-auto w-full md:max-w-7xl px-6 lg:px-8">
          <div className="flex ites-center justify-between">
            <div className="flex items-center">
              <button
                className="py-3 px-6 bg-tealLight text-white hover:bg-roseLight rounded-lg text-sm font-normal mr-4 capitalize"
                // onPointerEnter={() => setIsFilteredSmaller(true)}
                // onPointerLeave={() => setIsFilteredSmaller(false)}
                onClick={handleFilterSmallArea}
              >
                Filter small area than Lithuania
              </button>
              <button
                className="py-3 px-6 bg-tealLight text-white hover:bg-roseLight rounded-lg text-sm font-normal"
                // onPointerEnter={() => setIsFilteredOceania(true)}
                // onPointerLeave={() => setIsFilteredOceania(false)}
                onClick={handleFilterOceania}
              >
                Filter Oceania region
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

      <section
        className={`py-40 flex justify-center items-center ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </section>
      {/* countries card lists */}

      <CountryListItem filterdCountries={filterdCountries} />
    </>
  );
};

export default Home;
