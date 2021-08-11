import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

function JsonPlaceholder() {
    const [posts, setPosts] = useState([]);

    const getCardJsonData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            const res = response.data;
            setPosts(res);
        }).catch(error => console.log(error));
    }
    useEffect(() => {
        getCardJsonData();
    }, [])

    return (
        <section className="cardsContainer pb-5">
            <header className="bg-dark d-flex text-white justify-content-center align-items-center py-3 mb-5">
                <h2 className="text-uppercase">Post Cards</h2>
            </header>
            <div className="container">
                <div className="row gy-4">
                    {
                        posts.map((post, index) => {
                            return <PostCard post={post} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default JsonPlaceholder;
