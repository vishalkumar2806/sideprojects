import React from 'react'

const Menu = ({state} : any) => {
  return (
    <div id="menu" className="menu invisible">
    <ul>
      <a href="index.html" id="menu-logo" />
      <li><a className="menu" href="free-google-play-gift-cards.html">Google Play</a></li>
      <li><a className="menu" href="free-xbox-gift-cards.html">Xbox</a></li>
      <li><a className="menu" href="free-steam-gift-cards.html">Steam</a></li>
      <li><a className="menu" href="free-playstation-store-gift-cards.html">Playstation</a></li>
      <li><a className="menu" href="free-spotify-gift-cards.html">Spotify</a></li>
      <li><a className="menu" href="free-itunes-gift-cards.html">iTunes</a></li>
      <li><a className="menu" href="free-paypal-gift-cards.html">PayPal</a></li>
      <li><a className="menu" href="free-amazon-gift-cards.html">Amazon</a></li>
    </ul>
  </div>
  )
}

export default Menu