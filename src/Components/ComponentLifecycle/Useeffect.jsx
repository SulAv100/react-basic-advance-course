import React, {useState} from 'react'

function Useeffect() {

  const [initialInput, setInitialInput] = useState('');
  const [comments, setComments] = useState([
    {id:0, text:'This is 1 example', replies:[]},
    {id:1, text:'This is 2 example', replies:[]},
    {id:2, text:'This is 3 example', replies:[]},
    {id:3, text:'This is 4 example', replies:[]},

  ]);
  const [isReply, setIsReply] = useState(null);
  const [replyData, setReplyData]= useState('');
  return (
    <>
    <div className="input-box" style={{display:'flex', gap: '10px'}}>
      <input type="text" placeholder='Enter your thoughts' value={initialInput} onChange={(event)=> setInitialInput(event.target.value)} />
      <button onClick={()=> setComments((prevState)=>[
        {id:comments.length+1, text:initialInput, replies:[]},
        ...prevState
      ],
      setInitialInput('')
      
    )
        
      }>Comment this shit</button>
    </div>
    <div className="message-shower">
      {
        comments?.map((item)=>(
          <div style={{border:'1px solid black', display:'flex', flexDirection:'column'}} key={item.id} className="single-message">
              <span>{item.text}</span>
              <div style={{display:'flex', gap:'20px'}} className="buttons-data">

                
                  {isReply === item.id? (
                    <>
                    <button style={{width:'max-content'}} onClick={()=> setIsReply(null)} >Cancel</button>
                    <input type="text" value={replyData} onChange={(event)=>setReplyData(event.target.value)} placeholder='Enter the reply to this comment' />
                    <button onClick={handleDataUpdate} >Send comment</button>

                    </>
                  ):
                
             
                <button style={{width:'max-content'}} onClick={()=>setIsReply(item.id)} >Reply</button>
}
             
              </div>
         </div>
        ))
        
      }
    </div>
    </>
  )
}

export default Useeffect