import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto.js"

const API_KEY = "1TfVcwMbYqKXt3EPA3E5bsBepCmNc9Xe40T4k0oL";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(results => {
        setData(results.data);
      })
      .catch(err => console.error(err));
  }, [])
  


  return (
    <div className="App">
      <NasaPhoto photo={data}/>
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