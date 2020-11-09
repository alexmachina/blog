import React from "react";
import classes from "./banner.module.css";
import classnames from "classnames";

const Banner = () => {
  return (
    <div className="flex h-64 flex-grow flex-wrap justify-center items-center bg-gray-900 text-gray-100">
      <div className={classnames("w-full", "p-16")}>
        <div>
          <h1 className="text-5xl w-full text-center m-0">
            FRONT-END DEVELOPER <div className={classes.blink}>_</div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
