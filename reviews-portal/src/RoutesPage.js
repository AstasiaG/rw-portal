import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage"
import SignupPage from "./components/SignupPage";

function RoutesPage() {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element = {<MainPage/>}/>
               <Route path="/signup" element = {<SignupPage/>}/>
           </Routes>
       </BrowserRouter>
   );
}

export default RoutesPage