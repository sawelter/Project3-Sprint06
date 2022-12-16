import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const  Photo = props => {
    const { photo } = props;

    // Takes in Photo URL as prop
    // const [photo, setPhoto] = useState(""); // url??? 

    // setPhoto("https://apod.nasa.gov/apod/image/1001/NBMoon_StefanoDeRosa_sm.jpg");

    // returns an img
    return <img src={photo} />
}


export default Photo;