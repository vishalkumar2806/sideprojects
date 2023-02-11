'use client';
import React,{useState , useEffect} from 'react'


const GenBlock = ({ gen } : { gen : string}) => {
  const [width, setWidth] = useState(0);
  const [step1 , setstep1] = useState(false)
  const [step2 , setstep2] = useState(false)
  useEffect(() => {
    if(width < 100) {
      if(width > 50) { 
        setstep1(true)
      } 
      const id = setInterval(() => setWidth((width) => width + 0.1), 16);
      return () => {
        clearInterval(id);
      };
    }
      setstep2(true)
  }, [width]);
  return (
    <div>
    <div id="gboverlay" style={{ display: "block" }}>
    <div id="gbmouse" className="show" />
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
      {/*============== CHANGE HERE popup-app */}
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
        <div id="genlogo" className={`logo-${gen} hide`}/>{" "}
        {/*============== CHANGE HERE logo-app */}
        <div id="genreturn"  className="active">
          <span>FGF2</span>-<span>7G7Q</span>-<span>1UWJ</span>-
          <span className="final active">XXXX</span>
        </div>{" "}
        {/*============== CHANGE HERE XXXX-code */}
        <div id="statustext" style={{ opacity: 1 }}>
          Success!
        </div>
        <div id="hacklines" className="text-xl text-white font-Jetbrains">
          <p className="level1">Connecting to {gen} server...</p>{" "}
          {/*============== CHANGE HERE name */}
          <p className="level1">
            Server is up at 192.200.175.162:445 (latency 0.013s)
          </p>
          <p className="level1">Connecting to server SQL database...</p>
          <p className="level1">Obtaining a service manager handle...</p>
          <p className="level1">Creating a new service through pipeline...</p>
          <p className="level1">Closing service handle...</p>
          <p className="level1">
            Sending stage (749370 bytes) to 192.200.175.162
          </p>
          <p className="level1">Meterpreter session 1 opened at port 445</p>
          <p className="level1">Connected to Amazon server...</p>{" "}
          {/*============== CHANGE HERE name */}
          <p className="level2 longsearch">
            Searching database for unused codes...
          </p>
          <p className="level3 p-video">Success!</p>
          <p className="level3 p-survey">
            Please complete one of the surveys to get complete code...
          </p>
        </div>
        <div id="widgetholder"  className="hide">
          <div id="whclick" />
          <button  style={{ width: "100%", height: "100%" }} >Link Area</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default GenBlock