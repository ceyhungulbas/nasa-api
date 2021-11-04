import React, { useState, useEffect } from 'react';

const MRP = () => {
    const [roverPictures, setRoverPictures] = useState([])
    const [randomPhoto, setRandomPhoto] = useState(0)

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FSEEknZd7Il94MUFY0U6ProdddlQzEHGLDeqOoLa")
            .then(res => res.json())
            .then((data) => {
                console.log("data: ", data);
                console.log(data.photos.length);
                setRoverPictures(data)
            })
    }, [])

    const randomPhotoFunc = () => {
        return setRandomPhoto(Math.floor(Math.random() * 856))
    }
    return(
        <>
            <h1>Photos from Mars Rover!</h1>
            <button onClick={randomPhotoFunc}>Generate!</button>
            <br />
            <img src={roverPictures.photos[randomPhoto].img_src} alt={roverPictures.photos[randomPhoto].id} />

        </>
    )
}

export default MRP