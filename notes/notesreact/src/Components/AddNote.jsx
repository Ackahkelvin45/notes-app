import React from 'react'
import {MdEditNote} from "react-icons/md"
import { Link } from 'react-router-dom'

const  AddNote=()=> {
  return (
    <Link to={"/note/new"}>
      <MdEditNote className='text-orange-800' size={60}/>
    </Link>
  )
}

export default AddNote