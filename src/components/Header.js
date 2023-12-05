import React from "react"

export default function Header({ title, views, upvotes, downvotes, uploaded, commentStatus, viewCommentStatus, addVote, minusVote }) {

    function handleHideClick(event) {
        const newViewStatus = !commentStatus
        viewCommentStatus(newViewStatus)
    }

    // When upvotes is clicked 
    function handleUpVotes() {
        const updatedUpvotes = upvotes + 1
        addVote(updatedUpvotes)
    }

    // When Downvotes is clicked
    function handleDownVotes() {
        const updatedDownvotes = downvotes + 1
        minusVote(updatedDownvotes)
    }

    return (
        <div>
            <h2>{title}</h2>
            <p><strong>Views:</strong> {views} | <strong>Uploaded:</strong> {uploaded} </p>
            <div className="votes">
                <button type="button" onClick={handleUpVotes}>👍 {upvotes}</button>
                <button type="button" onClick={handleDownVotes}>👎{downvotes}</button>
            </div>
            <button type="button" onClick={handleHideClick}>{commentStatus ? "Hide Comments" : "Show Comments"}</button>
        </div>
    )
}