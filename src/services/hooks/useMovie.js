/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useState } from "react";
import { getFilms } from "../getFilms";

export function useMovie(id) {
    const [movie,setMovie]= useState()

    useEffect(()=>{
        getFilms(id).then((res) =>{
            setMovie(res)
        })
    },[])


    return {movie}
}