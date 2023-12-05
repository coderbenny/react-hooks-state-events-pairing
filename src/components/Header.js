import React from "react"

export default function Header({ title, views, upvotes, downvotes, uploaded, commentStatus, viewCommentStatus }) {

    function handleHideClick(event) {
        const newViewStatus = !commentStatus
        viewCommentStatus(newViewStatus)
    }

    return (
        <>
            <h2>{title}</h2>
            <p><strong>Views:</strong> {views} | <strong>Uploaded:</strong> {uploaded} </p>
            <div className="votes">
                <button type="button">upvotes: {upvotes}</button> |
                <button type="button">downvotes:{downvotes}</button>
            </div>
            <button type="button" onClick={handleHideClick}>{commentStatus ? "Hide Comments" : "Show Comments"}</button>
        </>
    )
}