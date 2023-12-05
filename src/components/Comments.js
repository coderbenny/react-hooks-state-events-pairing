import React from "react"

export default function Comments({ comments, viewState }) {

    return viewState ? (
        <div>
            <h2>Comments</h2>
            <div className="comments">
                <ul >
                    {comments.map((comment) => {
                        return (
                            < div className="comment" key={comment.id}>
                                <h4>{comment.user}</h4>
                                <p>{comment.comment}</p>
                            </div>
                        )
                    })}
                </ul>
            </div >
        </div>
    ) : null;
} 