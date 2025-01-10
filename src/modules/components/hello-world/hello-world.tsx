import React from 'react'
import { SvgAsset } from '../../../common/constants/assets'

export interface HelloWorldProps {}

export const HelloWorld: React.FC<HelloWorldProps> = () => {
  return (
    <div>
      <div>Hello World!</div>
      <img className='size-10' src={SvgAsset} alt='' />
    </div>
  )
}
