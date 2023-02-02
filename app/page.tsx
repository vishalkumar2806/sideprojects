
import React from "react";
import App from "./app";
import Loading from "@/components/index/loading";
const page = () => {
  const state = false
  return <>
  { state ? <Loading /> : <App /> }
  </>;
};

export default page
