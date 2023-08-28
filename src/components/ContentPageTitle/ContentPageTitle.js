import React from "react";
import { Link } from "react-router-dom";

import css from "./ContentPageTitle.module.css";

/**
 * Content Page Title Widget is used to display the Title of the Page
 * along with some information about the page
 */
const ContentPageTitle = React.memo(function ContentPageTitle({ dog = {} }) {
  return (
    <div className="widget-container">
      <div className="col-6 marginTop-8">
        <div className="flex alignCenter justifyBetween">
          <h1 className="l1SemiBold">{dog.name}</h1>
        </div>
        <div className="marginTop-16 flex alignCenter">
          <img
            className={`${css.avatar}`}
            // Uncomment me! To improve your CLS!
            // className={`${css.avatar} ${css.imageBoxMedium}`}
            src="https://onemg.gumlet.io/image/upload/staging/se4somos7fs1k4zlsjbt.jpg?width=45"
            alt={dog.name || "Avatar"}
          />
          <div className={`flexColumn ${css.marginLeft8}`}>
            <span className="smallRegular textSecondary">
              It is of{" "}
              <Link
                to={`/dogs/${dog.breed}`}
                className={`smallMedium noAnchorColor ${css.anchor}`}
              >
                {dog.breed} breed
              </Link>
            </span>
          </div>
        </div>
        <div className="marginTop-8 smallRegular textSecondary">
          Located at {dog.city}, {dog.state}
        </div>
        <div className="marginTop-4 smallRegular textSecondary">
          Last Updated on {new Date().toDateString()}
        </div>
        <div className={`${css.button} marginTop-8`}>Adopt {dog.name}</div>
      </div>
    </div>
  );
});

export default ContentPageTitle;
