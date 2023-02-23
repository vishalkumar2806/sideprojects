import React from 'react'
import { useSpring , animated } from '@react-spring/web'
import Link from 'next/link'
import OfferWall from './offerwall'
const LinkAnim = ({delay , offer } : {delay:number , offer: any }) => {
    const [springs, api] = useSpring(() => ({
        from: { y: 500, opacity:0 },
        to: { y: 0  , opacity: 1 },
        delay: delay,
      }))
  return (
    <animated.div style={{...springs}} className="value" >
      <OfferWall offer={offer} />
    </animated.div>
  )
}

export default LinkAnim