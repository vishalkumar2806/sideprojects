import React from 'react'
import Link from 'next/link'
const End = () => {
  return (
    <div>
    <div id="gift-cards" style={{transform: 'translateY(75px) skewY(0deg);'}}>
    <Link href="/generate?link=google" >
    <div className="gift-card-home">
      <div className="background bck-google" />
      <div className="click-area">
        <div className="logo logo-google" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=xbox" >
    <div className="gift-card-home">
      <div className="background bck-xbox" />
      <div className="click-area">
        <div className="logo logo-xbox" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=steam" >
    <div className="gift-card-home">
      <div className="background bck-steam" />
      <div className="click-area">
        <div className="logo logo-steam" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=psn" >
    <div className="gift-card-home">
      <div className="background bck-psn" />
      <div className="click-area">
        <div className="logo logo-playstation" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=spotify" >
    <div className="gift-card-home">
      <div className="background bck-spotify" />
      <div className="click-area">
        <div className="logo logo-spotify" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=itunes" >
    <div className="gift-card-home">
      <div className="background bck-itunes" />
      <div className="click-area">
        <div className="logo logo-itunes" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=paypal" >
    <div className="gift-card-home">
      <div className="background bck-paypal" />
      <div className="click-area">
        <div className="logo logo-paypal" />
      </div>
    </div>
    </Link>
    <Link href="/generate?link=amazon" >
    <div className="gift-card-home">
      <div className="background bck-amazon" />
      <div className="click-area">
        <div className="logo logo-amazon" />
      </div>
    </div>
    </Link>
  </div></div>
  )
}

export default End