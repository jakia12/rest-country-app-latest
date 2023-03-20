import React, { useState, useMemo } from "react";
import { country } from "../../models/models";
import ReactPaginate from "react-paginate";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface countryProps {
  filterdCountries: country[];
}

const CountryListItem = ({ filterdCountries }: countryProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  console.log(endOffset);

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filterdCountries.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterdCountries.length / itemsPerPage);

  console.log(currentItems);

  //   // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filterdCountries.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <section className="py-3">
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
              {currentItems?.map((country) => (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={country.area}
                >
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

        {/* country  pagination  */}
        <div className="py-10 md:py-20">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </section>
  );
};

export default CountryListItem;
