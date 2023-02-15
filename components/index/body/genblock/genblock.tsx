import React,{useState , useEffect} from 'react'
import HackerBlock from './hackerblock';
// import generator from '@/components/functions/generator';
  const GenBlock = ({ gen } : { gen : string}) => {
  
  return (
    <div>
    <div id="gboverlay" style={{ display: "block" }}>
    <div id="gbmouse" className="show" />
      {/*============== CHANGE HERE popup-app */}
      <HackerBlock gen={gen} />
    </div>
  </div>
  )
}

export default GenBlock