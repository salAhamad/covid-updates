import React from 'react'
import { Link } from 'react-router-dom';

function PostCard({post}) {
    return (
        <div className="col-4 col-xl-3">
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body d-flex justify-content-between flex-column">
                    <div className="">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                    <div className="mt-3">
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
