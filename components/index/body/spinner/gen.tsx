import React from 'react'
import clsx from 'clsx'
import genlink from '@/components/functions/genlink'
const Gen = ({card} : any) => {
  const cardClass = genlink(card)
  console.log(cardClass)
  return (
    <div id="start" style={{transform: 'translateY(0px)'}}>
        <div className={clsx("start-gift-card" , cardClass , "pos-0")}><div className="value">$1000</div></div>
        <div className={clsx("start-gift-card" , cardClass , "pos-1")}><div className="value">$100</div></div>
        <div className={clsx("start-gift-card" , cardClass , "pos-2")}><div className="value">$500</div></div>
    </div>
  )
}

export default Gen