'use client';
import { useEffect,useState } from 'react'
import React from 'react'
import { Oval, TailSpin } from 'react-loader-spinner'
import LinkAnim from './linkAnim'
import axios from 'axios';
const delay = 3000


const links = ['a', "b", "c", "d",]


const Survey = ({gen} : {gen : string}) => {
  const [offers, setoffers ] = useState([])
  useEffect(() => {
    const grabOffers = async () => {
      try{ 
       axios.get('/offers').then( resp => {
        const offers = resp.data.offers
        setoffers(offers)
       })
      }catch{
        console.log('something has happened')
      }
    } 
    grabOffers()
  } , [])

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
    <div className="bg-white h-full rounded-xl text-lg p-5">
        <nav className="bg-red-600 text-white  px-4 py-2 rounded-lg nowrap mb-3 level1">
          <div > 
            <div className='flex justify-center text-2xl font-jet gap-3' style={{fontFamily : 'JetBrains Mono', fontWeight : 700}} >
            Human Verification<TailSpin
            height={25}
            width={25}
            color="#1da1f2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='tail-spin-loading' />
            </div>
            <div className='text-center text-sm' style={{fontFamily : 'JetBrains Mono', fontWeight : 700}}>
                Please complete one or more offer to unlock the content
            </div>
        </div>  
        </nav>
        <div className="flex flex-col justify-between  border border-3 h-5/6 flex-nowrap rounded-lg px-2 py-2">
            <div className="text-white" >
              {
                offers.map((offer, i) => {
                  return( 
                    <LinkAnim delay={delay + 1000 * i} key={i} offer={offer}/>
                  )
                })
              }
              
            </div>
        <div className='border-sky-500 border-8'>
            </div><div className='flex flex-col gap-2 justify-center text-xl bg-sky-600 text-white w-full text-center wrap level1 p-4 rounded-full'>
            <div className='flex gap-2 items-center align-center space-between mx-auto'><span>Waiting for Verification</span> <TailSpin
            height={25}
            width={25}
            color="#1da1f2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            radius={3}
            ariaLabel='tail-spin-loading' /></div>
            <div className='text-xs'>Complete one or more offer to complete verification</div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Survey