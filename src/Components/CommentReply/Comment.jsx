import React, { useState } from "react";
import "./Comment.css";

const CommentSection = () => {
  

  const Comment = ({ comment, handleReplyClick, handleReplyInputChange, uploadReply }) => {
    return (
      <div className="comment-container-single">
        <div key={comment.id} className="higher-order-comment">
          <span>{comment.text}</span>
          <div onClick={() => handleReplyClick(comment.id)} className="reply-this-shit">Reply</div>
          {comment.replyFlag && (
            <>
              <div>
                <input
                  type="text"
                  autoFocus
                  value={comment.replyInput || ""}
                  onChange={(e) => handleReplyInputChange(comment.id, e.target.value)}
                />
              </div>
              <div>
                <button onClick={() => uploadReply(comment.id)}>Reply</button>
              </div>
            </>
          )}
        </div>
        <div className="comment-box-reply">
          {comment.items?.map((reply) => (
            <div style={{ paddingLeft: "50px", paddingTop: '10px' }} key={reply.id} className="okay">
              <Comment
                key={reply.id}
                comment={reply}
                handleReplyClick={handleReplyClick}
                handleReplyInputChange={handleReplyInputChange}
                uploadReply={uploadReply}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [input, setInput] = useState("");
  const [comments, setComments] = useState({id: 0, text : '', items:[]});
  const [uniqueId, setUniqueId] = useState(9);

  const handleReplyClick = (commentId) => {
    const toggleReplyFlag = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replyFlag: !comment.replyFlag };
        } else if (comment.items.length > 0) {
          return { ...comment, items: toggleReplyFlag(comment.items) };
        }
        return comment;
      });
    };

    setComments((prevState) => ({
      ...prevState,
      items: toggleReplyFlag(prevState.items),
    }));
  };

  const handleReplyInputChange = (commentId, value) => {
    const updateReplyInput = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replyInput: value };
        } else if (comment.items.length > 0) {
          return { ...comment, items: updateReplyInput(comment.items) };
        }
        return comment;
      });
    };

    setComments((prevState) => ({
      ...prevState,
      items: updateReplyInput(prevState.items),
    }));
  };

  const uploadToComment = (event) => {
    if (event && input) {
      setUniqueId(uniqueId + 1);
      setComments((prevState) => ({
        ...prevState,
        items: [...prevState.items, { id: uniqueId, text: input, items: [] }],
      }));
    }
    setInput('');
  };

  const uploadReply = (commentId) => {
    const addReply = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            items: [{ id: uniqueId, text: comment.replyInput, items: [] }, ...comment.items],
            replyInput: "",
            replyFlag: false,
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

    setUniqueId(uniqueId + 1);
    setComments((prevState) => ({
      ...prevState,
      items: addReply(prevState.items),
    }));
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
            <Comment
              key={comment.id}
              comment={comment}
              handleReplyClick={handleReplyClick}
              handleReplyInputChange={handleReplyInputChange}
              uploadReply={uploadReply}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
