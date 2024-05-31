import React, {useState} from 'react'

function EventHandler() {
    const [data, setData] = useState({
        name:'Sulav',
        age:21,
        address:'Rambazar'
    })
  return (
    <>
    {
        data.map((item)=>{
            return <>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span>{item.address}</span>
            </>
        })
    }
    </>
)
}

export default EventHandler