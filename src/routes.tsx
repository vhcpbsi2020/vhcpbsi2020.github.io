import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria"
import PageGrafico from "./pages/graficos";
import PageMapa from "./pages/Mapas";
import PageIbama from "./pages/ibama";
import PageIcmbio from "./pages/icmbio";
import PageEstatisticas from "./pages/Estatisticas";
import '../src/index.css'

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/NossaHistoria" element={<NossaHistoria/>}> </Route>
            <Route path="/estatisticas" element={<PageEstatisticas/>}> </Route>
            <Route path="/ibama" element={<PageIbama/>}> </Route>
            <Route path="/icmbio" element={<PageIcmbio/>}> </Route>
            <Route path="/mapas" element={<PageMapa/>}></Route>
        </Routes>
    )
}

export default MainRoutes;