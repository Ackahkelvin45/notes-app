import React from 'react'
import { Link } from 'react-router-dom'


let getDate=(note)=>{
  return new Date(note.updated).toLocaleDateString()
}

let getFirstLine= (note) =>{
  let line=note.body.split("\n")[0]
  if(line.length >45){
    return line.slice(0,45)+"..."
  }
  return line

  }
const  NoteItem=({note})=> {




  return (

    <Link to={`note/${note.id}`}  >
    <div className='flex flex-col '>
    <div className='border-solid border-neutral-800 border-2 my-1  shadow-md shadow-neutral-800 hover:bg-neutral-800 duration-500 h-[90px] py-1 px-3' >
  
    <h1 className='font-bold text-xl '>{note.header}</h1>
    <h3 className='font-semibold -mt-1'> {getFirstLine(note)}</h3>
    <div className='text-sm mt-2'>{getDate(note)}</div>
     
     </div>
     </div>
     </Link>
  )
}



export default NoteItem
