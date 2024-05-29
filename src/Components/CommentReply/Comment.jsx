import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Comment.css";

function Comment() {

    const {data, error, isLoading} = useQuery({
        queryKey:['random'],
        queryFn: async ()=>{
            const response = await fetch('https://source.unsplash.com/random');
            if(!response.ok){
                throw new Error ("Network response was not okay");
            }else{
                return response.json();
            }
        }
    })

    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');


  return (
    <div className="comment-box">
      <h1>Comments</h1>
      <div className="borderline"></div>
      <div className="message-area">
        <div className="comment-area">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="info">
            <div className="time-zone">
              <span>Name</span>
              <span>time</span>
            </div>
            <span>How artistix</span>
            <span className="reply-button">Reply</span>
          </div>
        </div>

        <div className="reply-container">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="info">
            <div className="time-zone">
              <span>Name</span>
              <span>time</span>
            </div>
            <span>How artistix</span>
            <span className="reply-button">Reply</span>
          </div>
        </div>

        <div className="comment-area">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="info">
            <div className="time-zone">
              <span>Name</span>
              <span>time</span>
            </div>
            <span>How artistix</span>
            <span className="reply-button">Reply</span>
          </div>
        </div>
        <div className="comment-area">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="info">
            <div className="time-zone">
              <span>Name</span>
              <span>time</span>
            </div>
            <span>How artistix</span>
            <span className="reply-button">Reply</span>
          </div>
        </div>
      </div>
      <div className="input-container">
        <input type="text" />
      </div>
      <button>Send</button>
    </div>
  );
}

export default Comment;
