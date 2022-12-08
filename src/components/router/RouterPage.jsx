

import LoginForm from "../loginpage/LoginForm";
import Example from "../registrationpage/Example";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../loadingpage/HomePage";


const RouterPage = () => {
  return (
    <>
    <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<HomePage />}></Route>
                              <Route path="/login" element={<LoginForm />}></Route> 
                              <Route path="/registration" element={<Example />}></Route> 
                              
                        </Routes>
                  </BrowserRouter>
    </>
  )
}

export default RouterPage