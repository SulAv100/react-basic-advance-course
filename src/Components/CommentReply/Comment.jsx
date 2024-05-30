import React, { useState } from "react";
import "./Comment.css";

const CommentSection = () => {
  const initialComments = {
    id: 1,
    items: [
      {
        id: 1,
        text: "This is the first comment",
        items: [
          {
            id: 2,
            text: "This is a reply to the first comment",
            items: [
              {
                id: 3,
                text: "This is a nested reply",
                items: [],
              },
            ],
          },
          {
            id: 5,
            text: "This is another reply to the first comment",
            items: [],
          },
        ],
      },
      {
        id: 4,
        text: "This is another comment",
        items: [
          {
            id: 6,
            text: "This is a reply to another comment",
            items: [],
          },
        ],
      },
    ],
  };

  const [input, setInput] = useState("");
  const [comments, setComments] = useState(initialComments);
  const [uniqueId, setUniqueId] = useState(9);
  const [replyFlag, setReplyFlag] = useState(null); // Track the comment ID being replied to
  const [replyInput, setReplyInput] = useState("");

  const handleFlag = (commentId) => {
    setReplyFlag(commentId);
  };

  const uploadToComment = () => {
    if (input) {
      setUniqueId((prevId) => prevId + 1);
      setComments((prevState) => ({
        ...prevState,
        items: [...prevState.items, { id: uniqueId, text: input, items: [] }],
      }));
      setInput('');
    }
  };

  const uploadReply = (commentId) => {
    const addReply = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            items: [...comment.items, { id: uniqueId, text: replyInput, items: [] }],
          };
        } else if (comment.items.length > 0) {
          return {
            ...comment,
            items: addReply(comment.items),
          };
        }
        return comment;
      });
    };

    if (replyInput) {
      setUniqueId((prevId) => prevId + 1);
      setComments((prevState) => ({
        ...prevState,
        items: addReply(prevState.items),
      }));
      setReplyInput('');
      setReplyFlag(null);
    }
  };

  const Comment = ({ comment }) => {
    return (
      <div className="comment-container-single">
        <div key={comment.id} className="higher-order-comment">
          <span>{comment.text}</span>
          <div onClick={() => handleFlag(comment.id)} className="reply-this-shit">Reply</div>
          {replyFlag === comment.id && (
            <>
              <div><input type="text" autoFocus value={replyInput} onChange={(e) => setReplyInput(e.target.value)} /></div>
              <div><button onClick={() => uploadReply(comment.id)}>Reply</button></div>
            </>
          )}
        </div>
        <div className="comment-box-reply">
          {comment.items?.map((reply) => (
            <div style={{ paddingLeft: "50px", paddingTop: '10px' }} key={reply.id} className="okay">
              <Comment key={reply.id} comment={reply} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="all-contain">
        <div className="input-contain">
          <input
            type="text"
            autoFocus
            placeholder="Enter your comment"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <span onClick={uploadToComment} className="button">Comment</span>
        </div>
        <div className="comment-container-main">
          {comments.items?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
