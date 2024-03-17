import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria"
import PageGrafico from "./pages/graficos";
import PageMapa from "./pages/Estatisticas";
import PageIbama from "./pages/ibama";
import PageIcmbio from "./pages/icmbio";
import PageQuemSomos from "./pages/Quem Somos";
import '../src/index.css'

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/nossaHistoria" element={<NossaHistoria/>}> </Route>
            <Route path="/graficos" element={<PageGrafico/>}> </Route>
            <Route path="/mapas" element={<PageMapa/>}> </Route>
            <Route path="/ibama" element={<PageIbama/>}> </Route>
            <Route path="/icmbio" element={<PageIcmbio/>}> </Route>
            <Route path="/quemSomos" element={<PageQuemSomos/>}> </Route>
        </Routes>
    )
}

export default MainRoutes;