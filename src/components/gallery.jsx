import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Here are a few of our collective projects!! Each tells a different story. What will your story be?
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    // largeImage={d.smallImage} // TODO: show projects
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
