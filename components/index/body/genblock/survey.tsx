import React from 'react'
import { Oval, TailSpin } from 'react-loader-spinner'
import LinkAnim from './linkAni'

const links = [{title: 'GET A FREE IPHONE 14 PRO MAX', link : 'offer_link'},
{title: 'GET A FREE ONE MONTH NETFLIX!!', link : 'offer_link'},
{title: 'WIN A CHANCE TO FREE TRIP TO HUWAI!!', link : 'offer_link'},
{title: 'GET A FREE GROCERIES FOR ONE MONTH', link : 'offer_link'}
]
const delay = 3000


const Survey = ({gen} : {gen : string}) => {
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
                links.map((link, i) => {
                  return( 
                    <LinkAnim delay={delay + 1000 * i} color={gen} key={i} title={link.title} link={link.link}/>
                  )
                })
              }
              
            </div>
        <div className='border-sky-500 border-8'>
            <div className='flex gap-2 justify-center text-xl bg-sky-600 text-white w-full text-center wrap level1 p-4 rounded-full'>Waiting for Verification <TailSpin
            height={25}
            width={25}
            color="#1da1f2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            radius={3}
            ariaLabel='tail-spin-loading' />
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Survey