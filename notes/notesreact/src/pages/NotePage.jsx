import React ,{useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate} from 'react-router-dom';
import {RiDeleteBin5Fill} from "react-icons/ri"

const NotePage = (props) => {
  const {id}=useParams()
let history=useNavigate()
  const [note,setNote]=useState(null)
useEffect(()=>{
  getNote()
},[id])
  let getNote= async ()=>{
    if (id==="new") return
    let response=await fetch(`/api/notes/${id}/`)
    let data= await response.json()
    setNote(data)

   
  }

let updateNote= async()=>{
  try {
    fetch(`/api/notes/update/${id}/`,{
      method:"PUT",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(note)
    })
  } catch (error) {
    console.log("error")
  }

}
let createNote= async()=>{
  try {
    fetch('/api/notes/create',{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(note)
    })
  } catch (error) {
  console.log("error")
  }
  
}
let deleteNote=async ()=>{
  fetch(`/api/notes/delete/${id}/`,{
    method:"DELETE",
    headers:{
      "content-Type":"application/json"
    }

  })
  history("/")
}
let handleUpdate=()=>{
  history("/")
if(id !== 'new' && note.body ===""  &&  note.header ===""){
 deleteNote()
}

    
else if (id !== "new"){
updateNote()
   }
  else if(id==="new" && note.body !=="" && note.header !== ""){
  
   createNote()
  }
 


 
}

  return (
    <div className='w-full text-gray-500  font-bold mt-4'>
    <div className='flex flex-row justify-between ' >
   <div className='flex flex-row flex-grow '>

  <MdKeyboardArrowLeft className='text-orange-800 cursor-pointer w-fit' size={40} onClick={()=>{handleUpdate()}}  />

  <textarea value={note?.header} className="outline-none  bg-neutral-800    h-10 resize-none p-2 w-full text-2xl overflow-hidden border-none focus:ring-0"  onChange={(event)=>{setNote({...note,"header":event.currentTarget.value})}} ></textarea>
</div>
  {id!=="new" ?(
    <RiDeleteBin5Fill className='text-orange-800 cursor-pointer ' size={35} onClick={()=>{deleteNote()}}/>
):(
  <button className='text-orange-800 font-bold text-2xl' onClick={()=>{handleUpdate()}}>Done</button>
)}
 
  </div>
  <textarea value={note?.body } className="outline-none w-full bg-gradient-to-b from-neutral-800  to-neutral-900 h-[300%]  resize-none mt-2 border-none  focus:ring-0"  onChange={(event)=>{setNote({...note,"body":event.currentTarget.value})}}></textarea>
  
  </div>
  )
}

export default NotePage