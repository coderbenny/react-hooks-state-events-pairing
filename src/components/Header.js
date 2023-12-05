export default function Header({ views, upvotes, downvotes, uploaded }) {
    function handleViewComments() {
        console.log("Handle View Comments")
    }

    return (
        <>
            <h2>Header</h2>
            <p>Views:{views} | Uploaded:{uploaded} </p>
            <div className="votes">
                <button type="button">upvotes: {upvotes}</button> |
                <button type="button">downvotes:{downvotes}</button>
            </div>
            <button onClick={handleViewComments}>Hide Comments</button>
        </>
    )
}