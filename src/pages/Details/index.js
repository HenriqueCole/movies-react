import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(){

    const { id } = useParams();

    const [movie, setMovie] = useState({})
    const images = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() =>{
        //consumindo API

        fetch('https://api.themoviedb.org/3/movie/${id}?api_key=a2ec7b90c1ab9bca5ffe4f0f7d5d5c37')
        
        .then(response => response.json())
        .then(data => {

            const movie = {
                id,
                title: data.tile,
                sinopse: data.overview,
                image: `${images}${data.poster_path}`,
                releaseDate: data.release_date
            }
            setMovie(movie)
            console.log("MOVIE",movie)
            console.log(id)
        })

    }, [ id ])

    return(
        <h1>Details's page</h1>
    )
}

export default Details;