import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto.js"

const API_KEY = "1TfVcwMbYqKXt3EPA3E5bsBepCmNc9Xe40T4k0oL";

function App() {

  const [data, setData] = useState();

  // get with date: https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(results => {
        console.log(results);
        setData(results.data);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;


/** 
 * <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> 
 */