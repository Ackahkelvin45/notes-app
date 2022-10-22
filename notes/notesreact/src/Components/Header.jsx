import React from 'react'

const Header=({note})=> {
  return (
    <div><div className='flex flex-row justify-between '>
  
    <h2 className='text-orange-800 text-3xl font-bold f bg-neutral-800' >&#9782; NOTES</h2>
    <p className='border-solid border-2 border-orange-800 text-gray-700 w-9 h-9 bg-orange-800 rounded-full justify-center items-center flex font-bold text-2xl'>{note.length}</p>
    
  </div></div>
  )
}

export default Header