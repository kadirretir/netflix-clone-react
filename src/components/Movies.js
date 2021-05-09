import React, { useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Movies(props) {
    const { popularmoviesrowone, popularmoviesrowtwo, popularmoviesrowthree, famousmovies } = props;
    // MAKE THE LEFT SCROLLS UNVISIBLE WHEN COMPONENT DİD MOUNT
    useEffect(() => {
        const leftArrows = document.querySelectorAll(".arrow-left");
        leftArrows.forEach(eachLeftArrow => {
            eachLeftArrow.classList.add("hidden");
        })
    })

    const changeArrowDisplay = (NextArrow, movieLineWidth, PrevArrow) => {
        function scrollListenerFunction() {
            // GET THE MOVIES LINE MAX SCROLLABLE WIDTH AND IF THE CURRENT
            // SCROLL HAS REACHED IT, MAKE TAKE NEXT ARROW UNVISIBLE (DON'T SHOW)
            const maxScrollLeft = movieLineWidth.scrollWidth - movieLineWidth.clientWidth;
            if (movieLineWidth.scrollLeft >= maxScrollLeft) {
                NextArrow.classList.add("hidden");
            } else {
                NextArrow.classList.remove("hidden");
            }

            // IF SCROLLLEFT IS ZERO, THEN MAKE THE LEFT ARROW UNVISIBLE (DON'T SHOW)
            if (movieLineWidth.scrollLeft === 0) {
                PrevArrow.classList.add("hidden");
            } else {
                PrevArrow.classList.remove("hidden");
            }
        }
        // APPLY THOSE CONDITIONS ABOVE TO EVERY SCROLL EVENT
        movieLineWidth.addEventListener("scroll", scrollListenerFunction);
    };

    const nextSlide = (id) => {
        // GET THE CLICKED ARROW ELEMENT THAT HAS MOVIE-LINE CLASSNAME PARENT 
        // AND APPLY THE SCROLL BY.
        const parentNodeMovieLine = id.currentTarget.parentNode;
        const specificMovieWidth = id.currentTarget.nextSibling;
        parentNodeMovieLine.scrollBy({
            top: 0,
            left: +specificMovieWidth.offsetWidth * 2.12,
            behavior: 'smooth'
        });
        // SEND THE CLICKED ARROW AND PREVIOUS ARROW BUTTON AS A PARAMETER TO THE ARROW DISPLAY CONDITION FUNCTION
        changeArrowDisplay(id.currentTarget, parentNodeMovieLine, id.currentTarget.previousSibling);
    }

    const prevSlide = (id) => {
        const parentNodeMovieLine = id.currentTarget.parentNode;
        const specificMovieWidth = id.currentTarget.nextSibling.nextSibling;
        parentNodeMovieLine.scrollBy({
            top: 0,
            left: -specificMovieWidth.offsetWidth * 2.15,
            behavior: 'smooth'
        });
    }

    return (
        <section id="movies">
            <div className="container">
                <div className="row">
                    <div className="movies-title">
                        <a href="/" className="hover-for"><h5 >Popüler Filmler</h5></a>
                        <a href="/" className="explore-more">Daha fazlasını keşfet &#62;</a>
                    </div>

                    <div className="movie-line" >
                        <RiArrowLeftSLine
                            onClick={prevSlide}
                            className="arrows arrow-left" />
                        <RiArrowRightSLine
                            onClick={nextSlide}
                            className="arrows arrow-right" />

                        {popularmoviesrowone.map((movie) => (
                            <div className="movie-cap" key={movie.id}>
                                <a href="/"><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movies" /></a>
                                <a href="/"><h5>{movie.name || movie.title}</h5></a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="movies-title">
                        <a href="/" className="hover-for"><h5 >En Çok İzlenenler</h5></a>
                        <a href="/" className="explore-more">Daha fazlasını keşfet &#62;</a>
                    </div>

                    <div className="movie-line" >
                        <RiArrowLeftSLine
                            onClick={prevSlide}
                            className="arrows arrow-left" />
                        <RiArrowRightSLine
                            onClick={nextSlide}
                            className="arrows arrow-right" />

                        {popularmoviesrowtwo.map((movie) => (
                            <div className="movie-cap" key={movie.id}>
                                <a href="/"><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movies" /></a>
                                <a href="/"><h5>{movie.name || movie.title}</h5></a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="movies-title">
                        <a href="/" className="hover-for"><h5 >En Beğenilenler</h5></a>
                        <a href="/" className="explore-more">Daha fazlasını keşfet &#62;</a>
                    </div>

                    <div className="movie-line" >
                        <RiArrowLeftSLine
                            onClick={prevSlide}
                            className="arrows arrow-left" />
                        <RiArrowRightSLine
                            onClick={nextSlide}
                            className="arrows arrow-right" />

                        {popularmoviesrowthree.map((movie) => (
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

                    <div className="movie-line-blur" >
                        {famousmovies.map((movie) => (
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