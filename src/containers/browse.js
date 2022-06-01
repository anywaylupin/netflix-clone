import React, { useEffect, useState } from "react";
import axios from "axios";
import { Shows } from "../components";

export default function BrowseContainer() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await (
        await axios.get(`https://api.tvmaze.com/shows`)
      ).data;
      setMovies(response);
      console.log("response", response);
    };
    loadData();
  }, []);

  const handleSearch = (genre) => {
    const tag = genre.toUpperCase();
    const showList = document.getElementsByClassName("show-item");

    for (let i = 0; i < showList.length; i++) {
      showList[i].classList.contains(tag) || tag === "ALL"
        ? (showList[i].style.display = "")
        : (showList[i].style.display = "none");
    }
  };

  return (
    <>
      <Shows.NavBar>
        <button id="nav-all" className="nav-link" onClick={handleSearch("all")}>
          All
        </button>
        <button
          id="nav-documentary"
          className="nav-link"
          onClick={handleSearch("documentary")}
        >
          Documentary
        </button>
        <button
          id="nav-comedy"
          className="nav-link"
          onClick={handleSearch("comedy")}
        >
          Comedy
        </button>
        <button
          id="nav-horror"
          className="nav-link"
          onClick={handleSearch("horror")}
        >
          Horror
        </button>
        <button
          id="nav-crime"
          className="nav-link"
          onClick={handleSearch("crime")}
        >
          Crime
        </button>
      </Shows.NavBar>
      <Shows>
        {movies.map((item, index) => (
          <Shows.Item
            key={index}
            className={item?.genres.join(" ").toUpperCase() + "show-item"}
          >
            <Shows.Cover src={item?.image?.medium} alt={item?.name} />
            <Shows.Info>
              <Shows.Title>
                {item?.name}
                <Shows.Genre>{item?.genres.join(", ")}</Shows.Genre>
              </Shows.Title>
              <Shows.Year>{item?.premiered.slice(0, 4)}</Shows.Year>
            </Shows.Info>
          </Shows.Item>
        ))}
      </Shows>
    </>
  );
}
