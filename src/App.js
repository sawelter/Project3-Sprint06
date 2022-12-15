import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js"
import Footer from "./Components/Footer/Footer.js"
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer.js"

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoContainer />
      <Footer />
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