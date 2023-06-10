// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CityPage from "./Pages/CityPage";
import { useEffect } from "react";
import { getUser } from "./Redux/auth/auth.action";
import PrivateRoute from "./Pages/PrivateRoute";
import GoogleCallback from "./components/GoogleCallback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route
          path="/city"
          element={
            <PrivateRoute>
              <CityPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

/* 
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
    */
