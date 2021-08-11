import React from 'react'
import { Link } from 'react-router-dom';

function Comments({comment}) {

    return (
        <div className="card mb-3 bg-light" id={comment.id}>
            <div className="card-body d-flex justify-content-between flex-column">
                <div>
                    <h5 className="card-title">{comment.name} | <Link to={comment.email}>{comment.email}</Link></h5>
                    <p className="card-text">{comment.body}</p>
                </div>
                <div className="mt-3">
                    <Link to="/" className="btn btn-primary me-2">Edit Comment</Link>
                    <Link to="/" className="btn btn-danger">Delete Comment</Link>
                </div>
            </div>
        </div>
    )
}

export default Comments;
