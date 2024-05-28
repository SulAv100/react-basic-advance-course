import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react';

function ApiExample() {

    const [newTask, setNewTask] = useState('');

    const queryClient = useQueryClient();

    const {data, error, isLoading} = useQuery({
        queryKey:['nice'],
        queryFn : async ()=>{
            const response = await fetch("http://localhost:3000/posts");
            if(!response.ok){
                throw new Error("Error has occured");
            }else{
                return response.json();
            }
        }
        
    });

    const mutation = useMutation({
        mutationFn: async (newPost)=>{
            const response = await fetch("http://localhost:3000/posts",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newPost)
            }).then(response=>{
                if(!response.ok){
                    throw new Error ("Netowkr response was not okay");
                }else{
                    console.log("Data sent successfully");
                }
            })
        },
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:['nice']});
        }
    })

    

    
    if(error) return <p> an Error has occured</p>
    if(isLoading) return <p>Fetched data is loading </p>

    const handleSubmit= (event)=>{
        event.preventDefault();
        mutation.mutate({title: newTask, tags:[]});
    }
  return (
    <>

        <form onSubmit={handleSubmit}>

            <input type="text" value={newTask} placeholder='ENter your new task' onChange={(event)=> setNewTask(event.target.value)} />
            <button type='submit'>Add task</button>
        </form>
        {
            data?.map((item)=>(
                <div key={item.id}>
                    <span>{item.title}</span>
                </div>
            ))
        }
    </>
)
}

export default ApiExample