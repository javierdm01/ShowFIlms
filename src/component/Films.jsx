/* eslint-disable react/prop-types */

import { Link, useOutletContext } from "react-router-dom"
export function Films() {
    const films= useOutletContext()
    
    return (
        <>
        {
            films ? films.map(movie=>(
                <div className="card" key={movie.id}>
                    {movie.poster_path && <img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_path} alt="" />}
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                    <Link to={'/film/'+movie.id}>Ver mas</Link>
                </div>
            )) : ''
        }
        </>
    )
}