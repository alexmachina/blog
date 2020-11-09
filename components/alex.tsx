import React from "react";
import Links from "./links";
import classes from "./alex.module.css";

const Alex = () => {
  return (
    <div className="flex justify-center w-full m-16 relative">
      <div className="flex w-1/2">
        <img className="rounded-full w-1/3" src="/alex.jpg" />
        <div className="flex flex-grow justify-between w-1/3 items-center">
          <div className="w-1/5 m-4">
            <img className="rounded-full w-full" src="/github.svg"></img>
          </div>
          <div className="w-1/5 m-4">
            <img className="rounded-full w-full " src="/twitter.svg"></img>
          </div>
          <div className="w-1/5 m-4">
            <img className="w-full" src="/linkedin.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alex;
