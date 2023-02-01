import React from "react";
import Content from "./body/content";
import End from "./body/end";
import Spinner from "./body/spinner";
import Start from "./body/start";
const Body = () => {
  return (
    <div>
      <Spinner />
      <Start />
      <Content />
      <End />
    </div>
  );
};

export default Body;
