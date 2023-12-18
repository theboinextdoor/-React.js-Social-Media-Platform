import React from "react";
import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate, } from "react-router-dom";

const CreatePost = () => {
  const {addPost} = useContext(PostList)
  const navigate = useNavigate()

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const recationsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = recationsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    recationsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
    navigate("/");
  
  

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      {/* UserId */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your UserID"
        />
      </div>

      {/* Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      {/* Content */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="5"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      {/* Reactions */}

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          ref={recationsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      {/* Tags */}
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="How many people reacted to this post"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form >
  );
};


export default CreatePost;
