import React from 'react';



function Movies (props) {

    return (
        <section id="movies">
        <div className="container">

        <div className="row">

        <div className="movies-title">
           <a href="/" className="hover-for"><h5 >Popüler Filmler</h5></a>  
           <a href="/" className="explore-more">Daha fazlasını keşfet &#62;</a>
        </div>

        <div className="movie-line" >
        {props.popularmovies.map((movie) => (

            <div className="movie-cap" key={movie.id}>
           <a href="/"><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movies" /></a>

           <a href="/"><h5>{movie.name || movie.title}</h5></a>
            </div>

        ))}

           </div>    

            </div>

            <div className="row">

            <div className="movies-title">
            <a href="/" className="hover-for"><h5 >En çok bilinen filmler</h5></a>  
            <a href="/" className="explore-more">Daha fazlasını keşfet &#62;</a>
            </div>

            <div className="movie-line" >
            {props.famousmovies.map((movie) => (

                <div className="movie-cap" key={movie.id}>
            <a href="/"><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movies" /></a>

            <a href="/"><h5>{movie.name || movie.title}</h5></a>
                </div>

            ))}

            </div>    

                </div>

        </div>
        </section>
    );
}

export default Movies;