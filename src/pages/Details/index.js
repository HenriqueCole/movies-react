import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContainerDetail } from "./styles";


function Details(){

    const { id } = useParams();

    const [movie, setMovie] = useState({})
    const images = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() =>{
        //consumindo API

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a2ec7b90c1ab9bca5ffe4f0f7d5d5c37`)
        
        .then(response => response.json())
        .then(data => {

            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${images}${data.poster_path}`,
                releaseDate: data.release_date
            }
            setMovie(movie)
            console.log("MOVIE",movie)
        })

    }, [ id ])

    return(
        <ContainerDetail>
            <h1>Details's page</h1>
            <div className="movie">
            <img src={movie.image}/>
                <div className="details">
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.sinopse}</span>
                <span className="release">Release date: {movie.releaseDate}</span>
                <Link to="/"><button>go back</button></Link>
                </div>
            </div>
        </ContainerDetail>
    )
}

export default Details;