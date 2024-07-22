import React from "react";
import { LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Theme from "./Theme";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Hotels",
      slug: "/villas",
      active: authStatus,
    },
    {
      name: "Book your Stay",
      slug: "/make-a-reservation",
      active: authStatus,
    },
    {
      name: "Check Availability",
      slug: "/availability",
      active: authStatus,
    },
    {
      name: "Your Bookings",
      slug: "/your-bookings",
      active: authStatus,
    },
  ];

  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black dark:text-white bg-white dark:bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li key={"Logout"}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  <LogoutBtn />
                </button>
              </li>
            )}
          </ul>
        </div>

        
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 100 100">
          <circle cx="52" cy="52" r="44" opacity=".35"></circle><circle cx="50" cy="50" r="44" fill="#f2f2f2"></circle><path fill="#f2f2f2" d="M50,91C27.393,91,9,72.607,9,50S27.393,9,50,9s41,18.393,41,41S72.607,91,50,91z"></path><circle cx="50.026" cy="50.026" r="38.026" fill="#96c362"></circle><circle cx="50" cy="50" r="37.5" fill="none" stroke="#40396e" strokeMiterlimit="10" strokeWidth="3"></circle><g><path fill="#f2f2f2" d="M42.017,65c-0.767,0-1.534-0.292-2.119-0.877l-10.017-10c-1.173-1.17-1.175-3.07-0.004-4.243 c1.17-1.173,3.07-1.175,4.242-0.003l7.896,7.882l23.881-23.88c1.172-1.172,3.07-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242 l-26,26C43.552,64.707,42.784,65,42.017,65z"></path></g>
        </svg>

        <a className="btn btn-ghost text-xl italic">Mayfair</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li><Theme /></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
