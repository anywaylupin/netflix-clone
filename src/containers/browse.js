import React, { useCallback, useEffect, useState } from "react";
import { Header, Shows, Subscription } from "../components";
import { Link } from "react-router-dom";
import axios from "axios";
import * as ROUTES from "../routes/route.js";
import { Empty } from "../components/styles/shows";

export default function BrowseContainer() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [input, setInput] = useState("");
  const [isActive, setActive] = useState([false, false, false, false, false]);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await (
        await axios.get(`https://api.tvmaze.com/shows`)
      ).data;
      setMovies(response);
      setFilteredMovies(response);
      console.log("response", response);
    };
    loadData();
  }, []);

  const handleSearch = useCallback(
    (tag) => {
      tag = tag.toUpperCase();
      let array = [];
      array = movies.filter(
        (item) =>
          item?.genres.map((item) => item.toUpperCase()).includes(tag) ||
          item?.name.toUpperCase().includes(tag) ||
          item?.premiered.slice(0, 4).includes(tag)
      );
      setFilteredMovies(array);
      array.length === 0 ? setEmpty(true) : setEmpty(false);
    },
    [movies, setFilteredMovies]
  );

  const toggleClick = useCallback((key) => {
    let res = [false, false, false, false, false];
    res[key] = true;
    setActive(res);
  });

  const handleSwitchTab = useCallback(
    (genre) => {
      const tag = genre.toUpperCase();

      let array = [];
      if (tag === "ALL") {
        setFilteredMovies(movies);
      } else {
        array = movies.filter((item) =>
          item.genres.map((item) => item.toUpperCase()).includes(tag)
        );
        setFilteredMovies(array);
      }
    },
    [movies, setFilteredMovies]
  );

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo>
            <Link to={ROUTES.HOME}>notflix</Link>
          </Header.Logo>
        </Header.Frame>
        <Header.Title className="find-title">Find Your Movie</Header.Title>
        <Subscription.Field className="search-bar">
          <Subscription.Input
            placeholder="What do you want to watch?"
            type="text"
            onInput={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(input)}
          />
          <Subscription.Button onClick={() => handleSearch(input)}>
            Search
          </Subscription.Button>
        </Subscription.Field>
      </Header>
      <Shows.NavBar>
        <button
          key={"nav-all"}
          className={isActive[0] ? "active" : null}
          onClick={() => {
            toggleClick(0);
            handleSwitchTab("all");
          }}
        >
          All
        </button>
        <button
          key={"nav-drama"}
          className={isActive[1] ? "active" : null}
          onClick={() => {
            toggleClick(1);
            handleSwitchTab("drama");
          }}
        >
          Drama
        </button>
        <button
          key={"nav-comedy"}
          className={isActive[2] ? "active" : null}
          onClick={() => {
            toggleClick(2);
            handleSwitchTab("comedy");
          }}
        >
          Comedy
        </button>
        <button
          key={"nav-horror"}
          className={isActive[3] ? "active" : null}
          onClick={() => {
            toggleClick(3);
            handleSwitchTab("horror");
          }}
        >
          Horror
        </button>
        <button
          key={"nav-crime"}
          className={isActive[4] ? "active" : null}
          onClick={() => {
            toggleClick(4);
            handleSwitchTab("crime");
          }}
        >
          Crime
        </button>
      </Shows.NavBar>
      <Shows>
        {filteredMovies.map((item, index) => (
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
        <Shows.Empty className={!isEmpty ? "hidden" : null}>
          <h2>Oh darn! We don't have that.</h2>
          <p>Try searching for another movie, show, genre or released year.</p>
        </Shows.Empty>
      </Shows>
    </>
  );
}
