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
    // cok sacma olmadi ama duzeltilmesi lazim ama bunun icin cok sarhosum su an
    return(
        <>
            <h1>Photos from Mars Rover!</h1>
            <button onClick={randomPhotoFunc}>Generate!</button>
            <img src={roverPictures.photos.charAt(randomPhoto)} />

            {/* {roverPictures.photos.map((pic) => {
                
                return(
                    <div className="roverPicMapFuncDiv">
                        <img src={pic.img_src} />
                    </div>
                )
            })} */}
        </>
    )
}

export default MRP