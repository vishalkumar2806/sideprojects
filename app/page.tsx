"use client";
import React from "react";
import App from "./app";
import Loading from "components/index/loading";
import { useAppSelector , useAppDispatch } from "./redux/hooks/hooks";
import { loading } from "./redux/action/stateSlice";
import { useEffect } from "react";
const Page = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector( (state) => state )
  const loadingSpinner = useAppSelector((state) => state.currentState.loading)
  console.log(loadingSpinner)
  
  useEffect( () => { 
    setTimeout( () => { 
      dispatch(loading())
      console.log(state)
    },2000)
  } , [])
 
  return(<>
  { loadingSpinner ? <Loading /> : <App /> }
  </>);
};

export default Page
