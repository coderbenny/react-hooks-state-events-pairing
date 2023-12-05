import React, { useState } from "react"

export default function Comments({ comments }) {
    const [allComments, setAllComments] = useState(comments)

    return (
        <>
            <h2>Comments</h2>
            <ul>
                {allComments.map((comment) => {
                    return (
                        <>
                            <h4>{comment.user}</h4>
                            <p>{comment.comment}</p>
                        </>
                    )
                })}
            </ul>
        </>
    )
} 