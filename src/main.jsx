import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout, Login, Signup } from "./components/index.js";
import Home from "./pages/Home.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import Villas from "./pages/Villas.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import YourBookings from "./pages/YourBookings.jsx";
import CheckAvailability from "./pages/CheckAvailability.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/make-a-reservation",
        element: (
          <AuthLayout authentication>
            {" "}
            <BookingPage />
          </AuthLayout>
        ),
      },
      {
        path: "/villas",
        element: (
          <AuthLayout authentication>
            {" "}
            <Villas />
          </AuthLayout>
        ),
      },
      {
        path: "/availability",
        element: (
          <AuthLayout authentication>
            {" "}
            <CheckAvailability />
          </AuthLayout>
        ),
      },
      {
        path: "/your-bookings",
        element: (
          <AuthLayout authentication>
            {" "}
            <YourBookings />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
  
        <RouterProvider router={router} />
    
    </Provider>
  </React.StrictMode>
);
