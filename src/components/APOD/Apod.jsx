import React, { useState, useEffect } from 'react';
import "./apod.css"

const Apod = () => {
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=FSEEknZd7Il94MUFY0U6ProdddlQzEHGLDeqOoLa")
            .then(res => res.json())
            .then((data) => {
                setPictures(data)
            })
    }, [])

    console.log("pictures: ", pictures);

    return(
        <>
            <h1>Astronomy Picture of the Day</h1>
            <div className="apodPart">
                <h2>{pictures.title}</h2>
                <img src={pictures.hdurl} alt={pictures.copyright} />
                <p>{pictures.explanation} <br /><sub>Copyright: {pictures.copyright}</sub></p>
            </div>
            <p>cok yoruldum kanka hadi calis</p>
            <span>valla calisti</span>
        </>
    )
}

export default Apod