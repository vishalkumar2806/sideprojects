"use client";
import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="wrapper m-0 p-0">
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loading;
