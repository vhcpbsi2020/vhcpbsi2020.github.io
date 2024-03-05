import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria"
function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/NossaHistoria" element={<NossaHistoria/>}> </Route>
        </Routes>
    )
}

export default MainRoutes;