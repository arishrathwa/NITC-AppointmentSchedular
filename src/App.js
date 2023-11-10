import { Fragment } from "react";
import Layout from "./higherOrderComponents/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { Login } from "./components/pages/auth/Login";
import { Home } from "./components/pages/Home";
import { ErrorBlock } from "./components/pages/ErrorBlock";
import { Register } from "./components/pages/auth/Register";
import { Dashboard } from "./components/pages/Dashboard";

function App() {
  return (
    <Fragment>
      {/*Root router for browser*/ }
        <BrowserRouter> 
         
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            {/* for any invalid path */}
            <Route path="*" Component={ErrorBlock}/> 
          </Routes>
          
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
