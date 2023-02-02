import React from "react";
import Card from "./content/card";

const cards = [{title:'card-google' , link: 'google.com'}, { title: 'card-steam'  , link: 'google.com' } , { title: 'card-playstation' , link: 'google.com' } , { title: 'card-spotify' , link: 'google.com'}, { title:  'card-itunes'  , link: 'google.com'}, {  title: 'card-paypal' , link: 'google.com' } ,{  title: 'card-amazon' , link: 'google.com' }]


const Content = () => {
  return (
    <>
        <div className="grid lg:grid-cols-4 grid-cols-1 bg-white justify-center rounded-3xl p-8 gap-8">
            { cards.map( (items,index) => { 
              const { title, link } = items;
              return(
                <div className="flex-box" key={index}>
                <Card title={title} link={link} />
                </div>
              )
            })}
        </div>
    </>
  );
};

export default Content;
