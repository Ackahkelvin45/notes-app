import React ,{useState,useEffect}from 'react';
import './App.css';
import NoteListPage from "./pages/NoteListPage"
import { HashRouter as Router,Route, Routes} from "react-router-dom";
import NotePage from './pages/NotePage';
import Header from './Components/Header';






function App() {
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

    <Router >
    <div className='flex  justify-center items-center bg-neutral-900  h-screen'>
    <div className='flex flex-col max-w-screen-md bg-gradient-to-b from-neutral-800  to bg-neutral-900  h-[85%] w-full  bg- p-2  mx-6 sm:mx-automd:mx-auto  my-10 shadow-md shadow-gray-700'>
    <Header note={notes}/>
    <Routes>
    <Route path='/' exact element={<NoteListPage />}/>
    <Route path='/note/:id'  element={<NotePage/>}/>
    
    </Routes>
    </div>
    
    </div>
    
    </Router>
  );
}

export default App;


