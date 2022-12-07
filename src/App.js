import HomePage from "./components/loadingpage/HomePage";
import LoginForm from "./components/loginpage/LoginForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/registrationpage/Example";

function App() {
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
      );
}

export default App;
