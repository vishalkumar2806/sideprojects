'use client';
import React from "react";
// import Loading from "components/index/loading";
// import { useAppSelector, useAppDispatch } from "app/redux/hooks/hooks";
// import { loading } from "app/redux/action/stateSlice";
import Header from "@/components/index/header";
import Body from "@/components/index/body";
import Footer from "@/components/index/footer";

const Page = () => {

  return (
    <>
      <div className="bck-google">
        <div className="wrapper mx-8">
          <Header />
          <Body gen="google" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;