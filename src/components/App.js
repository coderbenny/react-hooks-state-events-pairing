import React from "react";
import video from "../data/video.js";
import Header from "./Header";
import Comments from "./Comments";

function App() {

  return (
    <>
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header views={video.views} upvotes={video.upvotes} downvotes={video.downvotes} uploaded={video.createdAt} />
      <hr />
      <Comments comments={video.comments} />
    </>
  );
}

export default App;
