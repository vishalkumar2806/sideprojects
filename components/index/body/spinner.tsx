import React from 'react'
import { useAppSelector } from '@/app/redux/hooks/hooks'
import Gen from './spinner/gen'
import BodyGen from './spinner/body'
const Spinner = ({ gen } : any) => {
  return (
    <div>
      { 
      gen ? <Gen card={gen}/> : <BodyGen />
      }
    </div>
  )
}
export default Spinner