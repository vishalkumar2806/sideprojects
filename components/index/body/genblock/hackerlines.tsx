'use client';
import React, { useEffect, useState } from 'react'
import Typed from 'typed.js';
import classNames from 'classnames';
import generator from '@/components/functions/generator';
import Survey from './survey';
interface state{
  isFinished : boolean,
  humanVerify : boolean
}

const HackerLines = ({gen} : {gen : string}) => {
  const [state , setState ] = useState({
    isFinished : false,
    humanVerif : false,
   })
  const onCompfunc = () => {
    setState((state) => ({ 
      ...state , isFinished : !state.isFinished,
    }))
    setTimeout( () => { 
      setState((state) => ({ 
        ...state , humanVerif : !state.humanVerif,
      }))
    }, 5000)
  }
  const [codes , setCodes] : [codes : any , setCodes : any] = useState(['A']);
    
  useEffect(() => {
        const gencodes = generator(10)
        setCodes(gencodes)
        const options = {
          strings: [`localhost@127.0.01 $ ssh ${gen}@172.168.33.23 ^1000\nConnecting to ${gen} Server...^1000\nConnected to SSH Server^1000\n${gen}@172.168.22.33 # python3 ${gen}.py -q^1000\nUsing shellcode....^1000\nGenerating payload...^1000\n`,
          'char shellcode[] = 0xea,0x0d,0x5d,0x30,0xbf,0x87,\n0x45,0x06,0x4f,0x53,0x55,0xaf,\n0x3a,0x4f,0xcc0x7f,0xe7,0xec,\n0xfe,0xfe,0xfe,0x2e,0xf1,0xf3\n0x61,0x68,0x6d,0x2e,0x72,0x67^2000\nGenerating payload...^1000',
          `Connecting to server SQL database... ^1000\nObtaining a service manager handle...^1000\nCreating a new service through pipeline...^1000\nSending stage (362730 bytes) to 172.168.22.43^1000\nMeterpreter session 1 opened at port 33220\nConnected to ${gen} server...^1000\n`,`Searching database for unused codes...^2000\nGenerating code...^1000\n${gencodes.join('\n')}\nUsing SOCKS5:64.22.34.67:8000....\nChecking Cards...^1000Success\n`,
          `$python3 anti-bot.py --verify^2000\nVerifying Status.^1000.^1000.^2000 95%^1000\n[ALERT] HIGH TRAFFIC DETECTED^1000\nHuman Verification Required...`,'Please verify you are a not a bot'
          ],
            typeSpeed: 0,
            backSpeed: 0,
            showCursor: true,
            cursorChar: '|',
            loop: false , 
            onComplete : () => { onCompfunc() }
        }
        const typed = new Typed('#entry', options);
        return () => typed.destroy()
    }, [])
  return (
  <>
  { state.humanVerif ? <Survey gen={gen} /> : 
  <div className='flex flex-col justify-between'>
   <div>
      <div id="genlogo" className={classNames(`logo-${gen}`)} />{ " " }
      <div id="hacklines" className="text-xl text-white font-Jetbrains">
      <div id="entry" className={classNames('level2' , 'text-sm')}></div>
      </div>
    </div>
  </div> 
  }
  </>
  )
}

export default HackerLines