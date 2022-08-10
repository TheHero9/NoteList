import React, { useState }  from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes.js"
import CreateArea from "./CreateArea";



function App(){

    const [notes, setNotes] = useState([])

    function addNote(note){
        setNotes(prev => {
            return [...prev, note]
        })
    }

    function deleteNote(id){
        setNotes(prev => {
            return prev.filter((el, index) => {
                return index !== id;
            }
            )
        })
    }
    
    return(
        <>
        <Header></Header>
        <CreateArea
        onAdd={addNote} />
        {notes.map((element, index) => {
           return <Note key={index} id={index} title={element.title} text={element.content} onDelete={deleteNote}/>
        })}
        
        
        <Footer></Footer>
    </>
    )
    
}

export default App