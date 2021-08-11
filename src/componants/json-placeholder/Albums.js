import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Albums() {
    const [photos, setPhotos]= useState([]);

    const getApiDataAlbum = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(photoResp =>{
            const photos = photoResp.data;
        }).catch(error => console.log(error));
    }

    useEffect(() => getApiDataAlbum(), []);
    return (
        <section className="album-section">
            <div className="container">
                
            </div>
        </section>
    )
}

export default Albums;
