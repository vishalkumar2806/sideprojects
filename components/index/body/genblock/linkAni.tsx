import React from 'react'
import { useSpring , animated } from '@react-spring/web'
import Link from 'next/link'
const LinkAnim = ({delay , color , title , link} : {delay:number , color: string, title :string , link: string}) => {
    const [springs, api] = useSpring(() => ({
        from: { y: 500, opacity:0 },
        to: { y: 0  , opacity: 1 },
        delay: delay,
      }))
  return (
    <animated.div style={{...springs}} className="value" >
                    <button
                    className={`surveylink bck-${color} w-full mb-3`}
                    >
                    <Link target='_blank' style={{fontFamily: 'JetBrains Mono'  , fontWeight: 700}} className="cursor-pointer text-2xl " href={link}>{title}</Link>
                    </button>
    </animated.div>
  )
}

export default LinkAnim