import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Form from "./pages/form";
import Landing from "./pages/landing";


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>              //
                <Route path='/login' element={<Form/>}/>
                <Route path='/register' element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}