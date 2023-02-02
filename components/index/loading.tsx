'use client';
import React from 'react'
import { Audio } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="wrapper m-0 p-0">
    <Audio
    height="100"
    width="100"
    color="#4fa94d"
    ariaLabel="audio-loading"
    wrapperStyle={{}}
    wrapperClass="wrapper-class"
    visible={true}
    />
    </div>
  )
}

export default Loading



