import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import axios from "axios";
import Input from "../components/Atoms/CustomInput";

const API_URL = "http://localhost:5000/api/v1/products";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  const predefinedLinks = [
    { id: 1, title: "Poco", url: "https://xiaomi-website.vercel.app/poco" },
    { id: 2, title: "Redmi", url: "https://xiaomi-website.vercel.app/redmi" },
    { id: 2, title: "Xiaomi", url: "https://xiaomi-website.vercel.app/xiaomi" },
    // Add more predefined links as needed
  ];

  useEffect(() => {
    if (inputFocused) {
      axios.get(API_URL)
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      setData([]); // Set data to an empty array when the input is not focused
    }
  }, [inputFocused]);

  return (
    <div className="w-full bg-contrast h-[100vh] flex flex-col justify-center items-center">
      <div className="relative max-w-lg w-full">
        <input
          className="search-box px-8 py-3 border border-gray-300 rounded w-full"
          placeholder="Redmi 13C"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.75-4.75"
            />
            <circle cx="10.5" cy="10.5" r="7.5" />
          </svg>
        </div>
      </div>

      {inputFocused && query === "" && (
        <div className="card-group mt-3 bg-white p-5 max-w-lg w-full">
          <h2>Tautan Cepat</h2>
          {predefinedLinks.map(link => (
            <div className="card py-3 w-full" key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
            </div>
          ))}
        </div>
      )}

      {(!inputFocused || query !== "") && data.length > 0 && (
        <div id="searchresults" className="bg-white max-w-lg w-full">
          {data.filter((product) =>
            product.name_product.toLowerCase().includes(query.toLowerCase())
          ).map((product) => (
            <div className="result bg-white w-full" key={product.id_product}>
              <Link to={`/product/${product.id_product}`}>
                <h3>{product.name_product}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
