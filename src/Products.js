import React, { useEffect, useState } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import Catalog from "./components/Catalog";
import { db } from "./firebase_setup/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Products = () => {
  const [sortBy, setSortBy] = useState({ field: null, direction: null });

  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortButtonClick = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleCategoryButtonClick = () => {
    setShowCategoryOptions(!showCategoryOptions);
  };

  const handleSort = (sortField, sortDirection) => {
    setSortBy({ field: sortField, direction: sortDirection });
    setShowSortOptions(!showSortOptions);
  };

  const handleCategory = (category) => {
    console.log("hekko");
    console.log(selectedCategories);
    // Check if category is already selected
    if (selectedCategories.includes(category)) {
      // If category is already selected, remove it
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, category]);
    }
    setShowCategoryOptions(!showCategoryOptions);
  };

  return (
    <div>
      <img
        src="/Screenshot 2024-05-10 151314.png"
        alt="Description of your image"
        className="w-full h-96"
      />
      <div>
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </div>

        <main className="max-w-screen px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Product Catalog
            </h1>
            <div className="flex items-center">
           
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
                >
                  {category}
                  <button
                    type="button"
                    onClick={() => handleCategory(category)}
                    className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    <svg
                      className="h-2 w-2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 8 8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M1 1l6 6m0-6L1 7"
                      />
                    </svg>
                  </button>
                </span>
              ))}

              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleCategoryButtonClick}
                  >
                    Category
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleSortButtonClick}
                  >
                    Sort
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Category options */}
                {showCategoryOptions && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-screen origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <button
                      className="absolute top-0 right-0 p-2"
                      onClick={() => setShowCategoryOptions(false)}
                    >
                      <svg
                        className="h-5 w-5 text-gray-400 hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586 6.707 5.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      {[
                        "Antibiotics",
                        "Calcium with Vit & Minerals",
                        "Calcium with Vit D3",
                        "Fever",
                        "Amino Acid",
                        "Pain Killer",
                        "Muscle Relaxation",
                        "Cough & Cold",
                        "Productive Cough",
                        "Fever, cough & Cold",
                        "Dry cough",
                        "Constipitation",
                        "UTI Antibiotic",
                        "Pain killer with Swelling",
                        "Protein Suppliment",
                        "Back Pain",
                        "Antacid",
                        "Bleeding stop",
                        "Bleeding stop with pain killer",
                        "Osteophorosise",
                        "Multivitamin",
                      ].map((category) => (
                        <button
                          key={category}
                          type="button"
                          className="text-gray-500 block px-2 py-1 text-sm"
                          role="menuitem"
                          onClick={() => handleCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sort options */}
                {showSortOptions && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {/* Sort options buttons */}
                      <button
                        type="button"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        onClick={() => handleSort("MRP", "asc")}
                      >
                        Price: Low to High
                      </button>
                      <button
                        type="button"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        onClick={() => handleSort("MRP", "desc")}
                      >
                        Price: High to Low
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button> */}
            </div>
          </div>

          <div className="flex items-center border-b-2 border-gray-500 pt-5">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <Catalog
            sortBy={sortBy}
            searchQuery={searchQuery}
            selectedCategories={selectedCategories}
          />
        </main>
      </div>
    </div>
  );
};

export default Products;
