
import React ,{useState,useEffect} from 'react'
import NoteItem from '../Components/NoteItem'
import AddNote from '../Components/AddNote';
function NoteListPage() {
  let [notes,setNotes]=useState([ ])
  
  useEffect(()=>{
    getNotes()
  },[])
let getNotes = async ()=>{
  let response = await fetch("api/notes/")
  let data  = await  response.json()
  setNotes(data)

}



  return (
    <div className={`w-full text-gray-400  flex flex-col justify-between scrollbar-thin  scrollbar-thumb-neutral-800 `}>
    <div className='flex flex-col  '>
    
    <div className='mt-10'>
      { notes.map((note,index)=>(
       
     <NoteItem note={note} key={index}/>
        
      ))}
      </div>
      </div>
      <div className='justify-end  flex fixed top-[78%]  right-[7%] lg:right-[22%] md:right-[12%]'>
      <AddNote />
      </div>
    </div>
  )
}

export default NoteListPage