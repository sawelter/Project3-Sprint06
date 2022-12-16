import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Caption from "./Caption.js"
import Photo from "./Photo.js"
import axios from 'axios';
import './PhotoContainer.css';



function PhotoContainer(props) {
    const [imgURL, setImgURL] = useState("");

    // const [photoInfo, setPhotoInfo] = useState(null);

    // let dateInput = document.querySelector(".date-input").value;
    // console.log("Date input: " + dateInput)


// FIX THIS ONCE I HAVE MY LIMIT RESET.
    // useEffect(() => {
    //     axios.get("https://api.nasa.gov/planetary/apod?date=2020-01-01")
    //         .then(res => {
    //             setImgURL(res.data.url);
    //             setPhotoInfo(res.data);
    //         })
    //         .catch(err => console.error(err))
    // }, [])
    return  (
        <div>
            {/* <input class="date-input"></input> */}
            <Photo photo={"https://apod.nasa.gov/apod/image/2212/MarsTrailsSMALL.jpg"}/>
            {/* <Caption photoInfo={photoInfo}/> */}
        </div>
    )
}


export default PhotoContainer;