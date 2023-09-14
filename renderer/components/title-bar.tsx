import React from 'react'

const TitleBar = () => {
  return (
    <div className='text-2xl w-full text-center font-mono'>
        <div className='space-x-4 p-2 mr-2 gap-2'>
        𒎌 K10s
        <span className='float-right text-end text-sm'>[Action: ⌘+K]</span>
        </div>
        <hr className='decoration-gray-400'/>
    </div>
  )
}

export default TitleBar