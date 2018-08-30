import React from "react";
import "./Comments.css";
import CommentsTemaplate from "./comments_template/CommentsTemplate";

const Comments = ({removeComment, currentComments, submitComment, formEl, commentInput, changeHandler}) => {
  return (
    <div className="comment-section">
      <div className="comment-input-container">
        <img className='video-description__image' src={require("../../profile_picture/profile.jpg")} alt=""/>
        <div className="comment-input">
          <input name='commentInput'
          ref={formEl}
        value={commentInput} 
          onChange={changeHandler}
            placeholder="Add a public comment"
            className="comment-input__input"
            type="text"
          />
          <div className='comment-input__buttons'>
            <button className='cancel-button'>CANCEL</button>
            <button onClick={submitComment} className='comment-button'>COMMENT</button>
          </div>
        </div>
      </div>
    {currentComments !== undefined ? currentComments.map(item => {
      return(
        <CommentsTemaplate 
        key={item.id}
          user={item}
          removeComment={removeComment}
        />
      )
    }) : 'No Video Comments'}
      
    </div>
  );
};

export default Comments;
