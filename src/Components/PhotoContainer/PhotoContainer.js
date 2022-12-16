import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Caption from "./Caption.js"
import Photo from "./Photo.js"
import axios from 'axios';
import './PhotoContainer.css';



function PhotoContainer() {
    const dates = ["2020-01-01", "2012-03-14", "2009-10-19"];
    const [imgURL, setImgURL] = useState("");
    const [photoInfo, setPhotoInfo] = useState(null);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(res => {
                console.log(res.data.url);
                setImgURL(res.data.url);
                setPhotoInfo(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    
    return (
        <div>
            <h1>PHOTO CONTAINER:</h1>
            <Photo photo={imgURL}/>
            <Caption photoInfo={photoInfo}/>
        </div>
    )
}


export default PhotoContainer;