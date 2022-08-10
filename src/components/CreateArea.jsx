import React, {useState} from "react";


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    // const [item,setItem] = useState([])


    function handleChange(event){
        const {name, value}= event.target
        
        setNote(prev => {
            return {
                ...prev,
                [name]: value 
            }
        })
    }

    function submit(event){
        props.onAdd(note)
        setNote({
          title: "",
          content: ""
        })
        
        event.preventDefault()
    }


  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;