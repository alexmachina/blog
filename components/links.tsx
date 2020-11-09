import React from "react";

const Item = ({ to, label }) => {
  return (
    <li className="">
      <a href={to}>{label}</a>
    </li>
  );
};

const Links = () => {
  return (
    <div className="text-2xl h-64">
      <ul className="flex flex-wrap justify-between items-between h-full">
        <Item to="github.com" label="Github" />
        <Item to="linkedin.com" label="LinkedIn" />
        <Item to="twitter.com" label="Twitter" />
      </ul>
    </div>
  );
};

export default Links;
