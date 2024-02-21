import { useParams } from "react-router-dom";
import { useMovie } from "../services/hooks/useMovie";

export function InfoMovie() {
    const param= useParams()
    console.log(param);
    const {movie} = useMovie(param.id)
    return (
        <>
        {
            movie && (
                <div  className="info_movie">
                    {movie.poster_path &&<img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_path} alt="" />}
                    <div>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        <p>{movie.vote_count}</p>
                        <p>{movie.vote_average}</p>
                        <p>{movie.overview}</p>
                        <a href={movie.homepage} target="_blank">{movie.homepage}</a>
                        <a className="header__link blue" href="/" >Volver</a>
                    </div>
                </div>
            )
        } 
        </>
    )
}