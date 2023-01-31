import React from "react";
import Card from "./content/card";

const cards = [{title:'card-google' , link: 'google.com'}, { title: 'card-steam'  , link: 'google.com' } , { title: 'card-playstation' , link: 'google.com' } , { title: 'card-spotify' , link: 'google.com'}, { title:  'card-itunes'  , link: 'google.com'}, {  title: 'card-paypal' , link: 'google.com' } ,{  title: 'card-amazon' , link: 'google.com' }]


const Content = () => {
  return (
    <>
        <div className="grid lg:grid-cols-4 grid-cols-1 bg-white justify-center rounded-3xl py-8 gap-3">
            { cards.map( (items,index) => { 
              const { title, link } = items;
              return(
                <div className="flex-box lg:blur-sm hover:blur-none" key={index}>
                <Card title={title} link={link} />
                </div>
              )
            })}
        </div>
    </>
  );
};

export default Content;
