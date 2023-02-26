'use client';
import React, { useState } from "react";
// import Card from "./content/card";
import genlink from "@/components/functions/genlink";
import GenBlock from "./genblock/genblock";
// import Link from "next/link";
import clsx from "clsx";

const priceList = ['100$', '500$','1000$']
const CardContainer = ({card} : any) => {
  const [start , updateStart] = useState(false)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateStart(true)
  }
  
    const cardtitle = genlink(card)
  return (
    <>
        <div className="grid lg:grid-cols-3 grid-cols-1 bg-white justify-center rounded-3xl py-7  gap-8 shadow-inner nowrap mb-7">
            { priceList.map( (price, index) => { 
              return(
                <div className="flex-box" key={index}>
                {/* <Card title={cardtitle} link={card.link} text={price}/> */}
                <div>
                <div className={clsx("choose-gift-card", cardtitle )}>
                    <div className="value position">
                      <button
                        className={`generate bck-${card.link}`} onClick={(e) => handleSubmit(e)}
                      >
                      {price}
                      </button>
                    </div>
                </div>
              </div>
                </div>
              )
            })
          }
          {
            start ? <GenBlock gen={card} /> : ''
          }
        
        </div>
    </>
  );
};

export default CardContainer;
