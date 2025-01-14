import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import Comments from "./Comments";

function App() {
  // All Comments Hook
  const initComments = video.comments
  const [allComments, setAllComments] = useState(initComments)

  // All Upvotes Hook
  const initUpVotes = video.upvotes
  const [allUpvotes, setAllUpvotes] = useState(initUpVotes)

  // All Downvotes Hook
  const initDownvotes = video.downvotes
  const [allDownvotes, setAllDownvotes] = useState(initDownvotes)

  // Comments View State
  const [viewComments, setViewComments] = useState(true)

  // Function for Handling Comments
  function handleCommentsVIew(newViewStatus) {
    setViewComments(newViewStatus)
  }

  // function for handling Adding Votes
  function addingVote(updatedUpvotes) {
    setAllUpvotes(updatedUpvotes)
  }

  // function for handling Adding Downvotes
  function handleDownvote(updatedDownvotes) {
    setAllDownvotes(updatedDownvotes)
  }

  const alignText = {
    textAlign: "center",
    alignItems: "center",
  }

  return (
    <div className="home" style={alignText}>
      < iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} upvotes={allUpvotes} downvotes={allDownvotes} uploaded={video.createdAt} commentStatus={viewComments} viewCommentStatus={handleCommentsVIew} addVote={addingVote} minusVote={handleDownvote} />
      <hr />
      <Comments viewState={viewComments} comments={allComments} />
    </div >
  );
}

export default App;
