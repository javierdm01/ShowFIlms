
import { useFilms } from "../services/hooks/useFilms";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
export function Layout() {
    const page= useRef(1)
    const {films,changePage}= useFilms()

    const handleClick=()=>{
        page.current++
        changePage(page.current)
    }
    const previousClick=()=>{
        if(page.current == 1) return 
        page.current --
        changePage(page.current)
    }
    return (
        <>
            <header className="header">
                <a className="header__link red"  onClick={previousClick}>Anterior </a>
                <a className="header__link blue"  onClick={handleClick}>Siguiente</a>
            </header>
            <main className="main">
                <Outlet context={films}/>
            </main>
            <footer className="footer">
                <Footer page={page.current}/>
            </footer>
        </>
    )
}