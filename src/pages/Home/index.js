import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){

   const [movies, setMovies] = useState([])
   const images = 'https://image.tmdb.org/t/p/w500/'

   useEffect(()=>{
    //consumir API

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a2ec7b90c1ab9bca5ffe4f0f7d5d5c37&language=en-US&page=1')
    
    .then(response => response.json())
    .then(data => setMovies(data.results))
   }, [])

    return(
        <Container>
            <h1>Movies</h1>

            <MovieList>
        {movies.map(movies => {
            return(
            <Movie key={movies.id}>

            <Link to={`/details/${movies.id}`}><img src={`${images}${movies.poster_path}`}/></Link>
            <span>{movies.title}</span>
            </Movie>
        )
        })}
            </MovieList>

        </Container>
    )
}

export default Home;