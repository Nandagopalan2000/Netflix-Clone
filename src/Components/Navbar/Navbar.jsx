import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

function Navbar(props) {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const history = useHistory();

  var handleChangeSearch = (value) => {
    setSearchQuery(value);
    history.push("/search?query=" + value);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset !== 0) {
        $("nav").css({ "line-height": "0.3" });
      } else {
        $("nav").css({ "line-height": "1.5" });
      }
    };
    //Jquery
    if (window.innerWidth > 400) {
      $(".search,.search-input").hover(
        () => {
          $(".search-input").css({ width: "18rem", padding: ".3rem" });
          $(".search-input").focus();
        },
        () => {
          if (!Boolean($(".search-input").val())) {
            $(".search-input").css({ width: "0rem", padding: "0rem" });
          }
        }
      );
    } else {
      $(".search").click(() => {
        setOpenSearch((openSearch) => !openSearch);
      });
    }
  }, []);

  useEffect(() => {
    if (openSearch) {
      $(".search-input").focus();
      $(".search-input").css({ width: "18rem", padding: ".3rem" });
    } else {
      $(".search-input").css({ width: "0rem", padding: "0rem" });
    }
  }, [openSearch]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix"
            width="124"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming-movies">
                Upcoming Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/trending-shows"
              >
                Trending Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/family-entertainment">
                Family Entertainment
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto text-white d-flex align-items-center justify-content-center">
          <button
            className="navbar-toggler mr-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <i className="fas fa-search fa-lg search"></i>
          <input
            type="text"
            className="search-input"
            placeholder={" Movies, TV Shows..."}
            onChange={(e) => {
              handleChangeSearch(e.target.value);
            }}
            value={searchQuery}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
