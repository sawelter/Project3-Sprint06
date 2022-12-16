import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import PhotoContainer from "./components/PhotoContainer/PhotoContainer.js"

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