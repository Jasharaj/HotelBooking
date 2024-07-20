//This is a demo
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Login } from "./components";
import { Outlet } from "react-router-dom";
import Loadinglg from "./components/Loadinglg";
import Home from "./pages/Home";
import Villas from "./pages/Villas";
import BookingPage from "./pages/BookingPage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);  

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between text-white bg-white dark:bg-gray-800">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
   ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-800">
      <div className="w-full block">
        <Header />
          <Loadinglg />
        <Footer />
      </div>
    </div>
  );
}

export default App;
