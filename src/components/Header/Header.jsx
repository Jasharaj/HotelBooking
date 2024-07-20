import React from "react";
import { LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <div className="navbar bg-gray-500 dark:bg-base-100">
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
            className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
              <li>
                <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                  <LogoutBtn />
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 210 210"
          id="blogger"
        >
          <g transform="translate(0 -87)">
            <path
              fill="#ff7f2a"
              d="M 25 18.701172 L 25 242.65039 L 248.94727 18.701172 L 25 18.701172 z M 775 544.75195 L 551.05078 768.70117 L 775 768.70117 L 775 544.75195 z "
              paint-order="fill markers stroke"
              transform="translate(0 87) scale(.26458)"
            ></path>
            <path
              fill="#ff7f2a"
              d="m 84.956378,124.9894 c -10.970675,-0.003 -18.036979,0.14146 -20.16907,0.42359 -11.355542,1.50234 -20.394931,9.76872 -23.420076,21.41478 -0.996912,3.83788 -1.058053,6.3717 -1.058053,44.50777 0,44.53911 -0.06913,43.50711 3.449413,50.50396 3.640108,7.23898 12.320885,13.79118 19.691853,14.86274 v 0.002 c 4.485648,0.65188 80.299045,0.65536 84.504565,0.003 9.17534,-1.42202 18.00489,-8.83786 21.43264,-17.99937 1.87634,-5.01498 2.23404,-10.39855 2.06784,-31.14274 l -0.15905,-19.7723 -10.1605,-0.27533 -10.16046,-0.27374 -0.32169,-19.22358 c -0.33727,-20.09806 -0.45008,-21.45395 -2.24838,-27.07501 -2.20558,-6.89423 -8.31377,-11.63651 -18.57481,-14.42309 -4.53217,-1.23076 -5.48416,-1.27412 -32.640493,-1.48164 -4.486167,-0.036 -8.576798,-0.0508 -12.233689,-0.052 z m 11.897695,34.51887 c 25.801367,0 25.690677,-0.012 27.809537,3.12944 1.43425,2.12698 1.46178,8.60141 0.0448,10.70026 -2.40583,3.56322 -1.6522,3.46376 -26.731826,3.54767 -12.535756,0.042 -23.391223,-0.0439 -24.124232,-0.18941 -1.973645,-0.39162 -3.837317,-1.77368 -4.736204,-3.51191 -1.108445,-2.14352 -1.047024,-8.41396 0.101901,-10.35891 1.983275,-3.35743 1.6482,-3.3171 27.636184,-3.3171 z m 10.734187,49.70329 c 32.55053,0 34.68702,0.0607 36.072,1.00083 2.5512,1.73172 3.40737,3.60686 3.42435,7.51179 0.012,2.3685 -0.3069,4.16759 -0.94008,5.34569 -1.91375,3.56007 -0.56789,3.44222 -39.14246,3.44222 H 72.034596 l -2.132171,-2.13221 c -2.082739,-2.0827 -2.132211,-2.22484 -2.132211,-6.09449 0,-4.50842 0.833631,-6.41897 3.506597,-8.03724 1.6279,-0.98552 3.382158,-1.03659 36.311449,-1.03659 z"
            ></path>
          </g>
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="jv689zNUBazMNK6AOyXtga_wFfu6zXx15Yk_gr1"
            x1="6"
            x2="42"
            y1="41"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#c8d3de"></stop>
            <stop offset="1" stop-color="#c8d3de"></stop>
          </linearGradient>
          <path
            fill="url(#jv689zNUBazMNK6AOyXtga_wFfu6zXx15Yk_gr1)"
            d="M42,39H6v2c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V39z"
          ></path>
          <linearGradient
            id="jv689zNUBazMNK6AOyXtgb_wFfu6zXx15Yk_gr2"
            x1="14.095"
            x2="31.385"
            y1="10.338"
            y2="43.787"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fcfcfc"></stop>
            <stop offset=".495" stop-color="#f4f4f4"></stop>
            <stop offset=".946" stop-color="#e8e8e8"></stop>
            <stop offset="1" stop-color="#e8e8e8"></stop>
          </linearGradient>
          <path
            fill="url(#jv689zNUBazMNK6AOyXtgb_wFfu6zXx15Yk_gr2)"
            d="M42,39H6V20L24,3l18,17V39z"
          ></path>
          <path
            fill="#de490d"
            d="M13,25h10c0.552,0,1,0.448,1,1v17H12V26C12,25.448,12.448,25,13,25z"
          ></path>
          <path
            d="M24,4c-0.474,0-0.948,0.168-1.326,0.503l-5.359,4.811L6,20v5.39L24,9.428L42,25.39V20L30.685,9.314	l-5.359-4.811C24.948,4.168,24.474,4,24,4z"
            opacity=".05"
          ></path>
          <path
            d="M24,3c-0.474,0-0.948,0.167-1.326,0.5l-5.359,4.784L6,18.909v5.359L24,8.397l18,15.871v-5.359	L30.685,8.284L25.326,3.5C24.948,3.167,24.474,3,24,3z"
            opacity=".07"
          ></path>
          <linearGradient
            id="jv689zNUBazMNK6AOyXtgc_wFfu6zXx15Yk_gr3"
            x1="24"
            x2="24"
            y1="1.684"
            y2="23.696"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#d43a02"></stop>
            <stop offset="1" stop-color="#b9360c"></stop>
          </linearGradient>
          <path
            fill="url(#jv689zNUBazMNK6AOyXtgc_wFfu6zXx15Yk_gr3)"
            d="M44.495,19.507L25.326,2.503C24.948,2.168,24.474,2,24,2s-0.948,0.168-1.326,0.503	L3.505,19.507c-0.42,0.374-0.449,1.02-0.064,1.43l1.636,1.745c0.369,0.394,0.984,0.424,1.39,0.067L24,7.428L41.533,22.75	c0.405,0.356,1.021,0.327,1.39-0.067l1.636-1.745C44.944,20.527,44.915,19.881,44.495,19.507z"
          ></path>
          <linearGradient
            id="jv689zNUBazMNK6AOyXtgd_wFfu6zXx15Yk_gr4"
            x1="28.05"
            x2="35.614"
            y1="25.05"
            y2="32.614"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#33bef0"></stop>
            <stop offset="1" stop-color="#0a85d9"></stop>
          </linearGradient>
          <path
            fill="url(#jv689zNUBazMNK6AOyXtgd_wFfu6zXx15Yk_gr4)"
            d="M29,25h6c0.552,0,1,0.448,1,1v6c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-6	C28,25.448,28.448,25,29,25z"
          ></path>
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
          <li>{/* <Theme /> */}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
