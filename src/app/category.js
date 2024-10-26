"use client"
import "./category.css"

export default function Category({ data, onMovieSelected }) {
    return (
        <article className="category">
            <h2>{data.title}</h2>
            <div id="carousel1" className="carousel">
                <div className="carousel-inner movies">
                    <div className="carousel-visible">
                        <div className="carousel-items">
                            {data.movies.map((movie) => (
                                <div key={movie.id} className="carousel-item movie" onClick={() => onMovieSelected(movie) }>
                                    <a href="#">
                                        <img src={movie.imageUrl} alt={movie.title} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-button prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="40">
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <button className="carousel-button next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="40">
                            <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <ul className="carousel-pagination"></ul>
            </div>
        </article>
    )
}