import React, { useEffect, useState } from "react";
import PlayButton from "../PlayButton/PlayButton";
import "./PostersRow.css";
import lozad from "lozad";
import { baseThumbImgUrl } from "../../configs/urls";

function PostersRow({ postersTitle, postersList }) {
  const [onMobile, setOnMobile] = useState(false);

  useEffect(() => {
    setOnMobile(Boolean(window.innerWidth < 767));
  }, []);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  });

  var prevItm;
  return (
    <React.Fragment>
      <div className="posters-title">
        <h3>{postersTitle}</h3>
      </div>
      {onMobile ? (
        <React.Fragment>
          {postersList.length > 0
            ? postersList.map((itm, indx) => {
                if ((indx + 1) % 2 === 0) {
                  return (
                    <div className="posters-wrapper" key={indx}>
                      <div className="poster-card">
                        <div className="dark-fade-top"></div>
                        <img
                          className="img lozad"
                          data-src={baseThumbImgUrl + itm.poster_path}
                          style={{ backgroundColor: "#222222e6" }}
                          alt={itm.title}
                        />
                        <PlayButton />
                        <div className="poster-text-wrapper">
                          <h5 className="poster-title">{prevItm.title}</h5>
                          <p className="poster-subtitle">
                            {prevItm.overview.substring(0, 90) + "..."}
                          </p>
                        </div>
                        <div className="dark-fade-bottom"></div>
                      </div>
                      <div className="poster-card">
                        <div className="dark-fade-top"></div>
                        <img
                          className="img lozad"
                          data-src={baseThumbImgUrl + prevItm.poster_path}
                          style={{ backgroundColor: "#222222e6" }}
                          alt={itm.title}
                        />
                        <PlayButton />
                        <div className="poster-text-wrapper">
                          <h5 className="poster-title">{itm.title}</h5>
                          <p className="poster-subtitle">
                            {itm.overview.substring(0, 90) + "..."}
                          </p>
                        </div>
                        <div className="dark-fade-bottom"></div>
                      </div>
                    </div>
                  );
                } else {
                  prevItm = itm;
                  return null;
                }
              })
            : null}
        </React.Fragment>
      ) : (
        <div className="posters-wrapper">
          {postersList.length > 0
            ? postersList.map((itm, indx) => {
                return (
                  <div className="poster-card" key={indx}>
                    <div className="dark-fade-top"></div>
                    <img
                      className="img lozad"
                      data-src={baseThumbImgUrl + itm.poster_path}
                      style={{ background: "#222222e6" }}
                      alt={itm.title}
                    />
                    <PlayButton />
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{itm.title}</h5>
                      <p className="poster-subtitle">
                        {itm.overview.substring(0, 75) + "..."}
                      </p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </React.Fragment>
  );
}

export default PostersRow;
