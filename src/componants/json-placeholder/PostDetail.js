import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Comments from './Comments';

const postImage = "https://www.riveriaglobal.com/wp-content/uploads/2017/12/vision-background-1200x300.jpg";

function PostDetail() {
    const [postDetail, setPostDetail] = useState([]);
    const getApiPostDetail = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => {
            const res = response.data;
            setPostDetail(res);
            console.log("Post Details ", res);
        }).catch(error => console.log(error));
    }
    useEffect(() => getApiPostDetail(), []);

    /* -----------------  Comments ------------------- */
    const [postComments, setPostComments] =  useState([]);
    const getApiPostComments = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(cmntReponse => {
            const res = cmntReponse.data;
            setPostComments(res);
            console.log("Post comments ", res);
        })
    }
    useEffect(() => getApiPostComments(), []);

    return (
        <section className="cardsContainer pb-5">
            <header className="bg-dark d-flex text-white justify-content-center align-items-center py-3 mb-5">
                <h2 className="text-uppercase">Post Details</h2>
            </header>
            <div className="container">
                <div className="card mb-5" id={postDetail.id}>
                    <div className="card-body d-flex justify-content-between flex-column">
                        <div className="card-image mb-3">
                            <img src={postImage} alt="Dummy Image" />
                        </div>
                        <div className="card-detail">
                            <h5 className="card-title">{postDetail.title}</h5>
                            <p className="card-text">{postDetail.body}</p>
                        </div>
                        <div className="mt-3">
                            <Link to="/" className="btn btn-primary me-2">Edit Post</Link>
                            <Link to="/" className="btn btn-danger">Delete Post</Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p>All Comments <strong>({postComments.length})</strong></p>
                </div>
                { postComments.map((comment, index) => <Comments comment={comment} key={index} />) }
            </div>
        </section>
    )
}

export default PostDetail;
