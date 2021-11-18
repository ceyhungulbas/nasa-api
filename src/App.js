import React from "react";
import Apod from "./components/APOD/Apod"
import MRP from "./components/MarsRoverPhotos/MRP";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {

// Your API key for cetree61@gmail.com is:
// FSEEknZd7Il94MUFY0U6ProdddlQzEHGLDeqOoLa

// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=FSEEknZd7Il94MUFY0U6ProdddlQzEHGLDeqOoLa

// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:
// Account Email: cetree61@gmail.com
// Account ID: 3a33926c-34b9-44a7-928f-0d6236173c71

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/mrp" element={<MRP />} />
      </Routes>
    </div>
  );
}

export default App;
