import { options } from "../apiconfig.enf";
export const getFilms=async(id='top_rated',page=1)=>{
  const URL=`https://api.themoviedb.org/3/movie/${id}?page=${page}`
    const query= await fetch(URL, options)
    const res= await query.json()
    return res

}