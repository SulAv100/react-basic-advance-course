import React,{useState, useEffect} from 'react'
import { useQuery } from '@tanstack/react-query'
import './DataClick.css'

function DataClick() {
    const [count, setCount] = useState(0);
    const [fetchData, setFetchData]  = useState('');
    
    // const {data, error, isLoading} = useQuery({
    //     queryKey:['fetchData'],
    //     queryFn : async ()=>{
    //         const response = await fetch('https://api.quotable.io/random');
    //         if(!response.ok){
    //             throw new Error ("Network response was not okay");
    //         }else{
    //             return response.json();
    //         }
    //     }
    // })
    // if(error) return <span>An unexpected error has occured</span>
    // if(isLoading) return <span>Fetching data please wait for a while</span>



    useEffect(()=>{
        const fetchData =  fetch('https://api.quotable.io/random').then((response)=>{
            if(!response.ok){
                throw new Error("Netowrk respnonse was not okay");
            }else{
                return response.json();
            }
        }).then((data)=>{
            setFetchData(data);
        })
    },[count])
    
  return (
        <>
            <div className="outer-box">
                <span>{fetchData.content}</span>
            </div>
            <button onClick={(event)=> setCount(prevState=> prevState+1)}>Fetch another one</button>
        </>
)
}

export default DataClick