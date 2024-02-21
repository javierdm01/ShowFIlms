import { useEffect, useState } from "react";
import { getFilms } from "../getFilms";

export function useFilms() {
    const [films,setFilms]= useState()

    useEffect(()=>{
        changePage()
    },[])

    const changePage=(page = 1)=>{
        getFilms(undefined,page).then((res) => {return setFilms(res.results) })
    }
    
    return {films, changePage}
}