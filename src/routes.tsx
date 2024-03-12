import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria"
import PageGrafico from "./pages/graficos";
function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/NossaHistoria" element={<NossaHistoria/>}> </Route>
            <Route path="/graficos" element={<PageGrafico/>}> </Route>
        </Routes>
    )
}

export default MainRoutes;