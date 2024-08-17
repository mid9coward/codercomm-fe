import React from "react";
import PostForm from "./PostForm";
import { useDispatch } from "react-redux";
import { updatePost } from "./postSlice";

function UpdatePost({ image, content, _id, callback }) {
  const dispatch = useDispatch();
  const submit = async ({ image, content }) => {
    await dispatch(updatePost({ image, content, _id }));
    callback();
  };

  return <PostForm submit={submit} post={{ image: image, content }} />;
}

export default UpdatePost;
