import React, { useEffect } from "react";
import Content from "./body/content";
import End from "./body/end";
import Spinner from "./body/spinner";
import Start from "./body/start";
import EndGen from "./body/end/endGen";
import CardContainer from "./body/cardCont";
import { useSpring , animated } from "@react-spring/web";
const Body = ({ gen } : any) => {
  const [springs, api] = useSpring(() => ({
    from: { y: 500, opacity:0 },
    to: { y: 0  , opacity:1 },
    delay: 750,
  }))

  return (
    <animated.div style={{ ...springs}}>
      <Spinner gen={ gen ? gen : ''}/>
      <Start />
      {gen ? <EndGen gen={gen}/> : ''} 
      { gen ? <CardContainer card={gen} /> : <Content /> }
      <End />
    </animated.div>
  );
};

export default Body;
