import React,{useState} from 'react'

function Array() {

    const [name, setName] = useState([]);
    
  return (
    <>
    <form onSubmit={handleUploadCommentData}>

        <input type="text" />
        <input type="password" />
    </form>

    </>
)
}

export default Array