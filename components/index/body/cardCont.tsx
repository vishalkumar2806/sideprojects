import React from "react";
import Card from "./content/card";
import genlink from "@/components/functions/genlink";
import GenBlock from "./genblock/genblock";
const priceList = ['100$', '500$','1000$']
const CardContainer = ({card} : any) => {
  
    const cardtitle = genlink(card)
  return (
    <>
        <div className="grid lg:grid-cols-3 grid-cols-1 bg-white justify-center rounded-3xl py-7  gap-8 shadow-inner nowrap mb-7">
            { priceList.map( (price, index) => { 
              return(
                <div className="flex-box" key={index}>
                <Card title={cardtitle} link={card.link} text={price}/>
                </div>
              )
            })
          }
        <GenBlock gen={card} />
        </div>
    </>
  );
};

export default CardContainer;
