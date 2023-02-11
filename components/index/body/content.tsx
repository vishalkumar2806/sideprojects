import React from "react";
import Card from "./content/card";

const cards = [{title:'card-google' , link: 'google'}, { title: 'card-steam'  , link: 'steam' } , 
{ title: 'card-playstation' , link: 'psn' } , { title: 'card-spotify' , link: 'spotify'}, 
{ title:  'card-itunes'  , link: 'itunes'}, {  title: 'card-paypal' , link: 'paypal' } 
,{  title: 'card-amazon' , link: 'amazon' },{  title: 'card-xbox' , link: 'xbox' }]


const Content = () => {
  return (
    <>
        <div className="grid lg:grid-cols-4 grid-cols-1 bg-white justify-center rounded-3xl py-7 gap-8 shadow-inner mb-32">
            { cards.map( (items,index) => { 
              const { title, link } = items;
              return(
                <div className="flex-box" key={index}>
                <Card title={title} link={link} text="Generate"/>
                </div>
              )
            })}
        </div>
    </>
  );
};

export default Content;
