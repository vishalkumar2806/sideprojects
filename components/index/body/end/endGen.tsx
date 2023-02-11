import React from 'react'

const EndGen = ({gen} : any) => {

  return (
    <div id="page" className="mb-12" style={{ transform: "translateY(0px)" }}>
  <div className="page-about">
    <div className={`background card-banner bck-${gen} rounded-3xl ring-2 ring-white`}/>
    {/*============== CHANGE HERE bck-app */}
    <div className={`logo logo-${gen} logo-spin`} />
  </div>
  </div>
  )
}

export default EndGen