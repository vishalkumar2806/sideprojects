import React, { useEffect, useState } from 'react'
import HackerLines from './hackerlines'

const HackerBlock = ({ gen } : {gen : string}) => {
    const [width, setWidth] = useState(0);
    const [step1 , setstep1] = useState(false)
    const [step2 , setstep2] = useState(false)
  useEffect(() => {
    if(width < 100) {
      if(width > 48) { 
        setstep1(true)
      } 
      const id = setInterval(() => setWidth((width) => width + 0.1), 48);
      return () => {
        clearInterval(id);
      };
    }
      setstep2(true)
  }, [width]);
  return (
    <div
    id="generatorbox"
    className={`popup-${gen} big`}
    style={{
      top: "50%",
      left: "50%",
      opacity: 1,
      transform: "scaleX(1) scaleY(1)",
      zIndex: 3
    }}
  >
    <div id="gbinner">
        <div id="steps">
          <div className="stepname" id="step1">
            Connecting
          </div>
          <div className="stepname" id="step2">
            Generating
          </div>
          <div className="stepname" id="step3">
            Completed
          </div>
          <div id="statusbar">
            <div id="sbcomplete" style={{ width: (width + '%') }} />
            <div className="sbcirca active" id="sbcirca1" />
            <div className={`sbcirca ${step1 ? 'active' : ''}`} id="sbcirca2" />
            <div className={`sbcirca ${step2 ? 'active' : ''}`} id="sbcirca3" />
          </div>
        </div>
        <HackerLines gen={gen}/>

        <div id="widgetholder"  className="">
          <div id="whclick" />
          <button  style={{ width: "100%", height: "100%" }} >Link Area</button>
        </div>
      </div>
      </div>
  )
}

export default HackerBlock