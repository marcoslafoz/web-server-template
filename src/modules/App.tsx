import React from 'react'
import { SvgAsset } from '../common/constants/assets'
import { ComponentePrueba } from './components/componente-ejemplo'

export const App: React.FC = () => {
  return (
    <main>
      <div className='flex items-center justify-center min-h-screen bg-gray-200'>
        <div className='text-center p-6 bg-white shadow-lg rounded-xl'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>Hello World!</h1>
          <img className='w-16 h-16 mx-auto' src={SvgAsset} alt='Hello World SVG' />
          <p className='text-sm font-bold text-gray-500 mt-4'>React TS + Vite + Tailwind</p>
          <p className='text-sm font-bold text-gray-300 mt-2'>
            Template by <a href='https://github.com/marcoslafoz'>@marcoslafoz</a>
          </p>
          <ComponentePrueba />
        </div>
      </div>
    </main>
  )
}
