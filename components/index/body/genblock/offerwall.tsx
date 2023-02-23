import React from 'react'
import '@/public/css/offerwall.css'
import Image from 'next/image'
const OfferWall = ({offer} : { offer: any} )  => {
  const { link , description , title , creatives , epc } = offer
  return (
    <div className="it">
    <a href={link} className="external offer-link" target="_blank" rel="noreferrer">
      <div className="it-content">
        <img src={creatives[0].url} className="it-image lazy"  alt="offer wall image" />
        <div className="it-details">
          <p className="it-title">{title}</p>
          <p className="it-description">{description} </p>
        </div>
      </div>
      <div className="it-points">
        <div className='mx-auto'>
          <svg style={{ fill:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        </div>
        <span>{epc[0]}m</span>
      </div>
    </a>
  </div>
  )
}

export default OfferWall