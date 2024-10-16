import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [pageState, setPageState] = useState("Sign-in");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign-in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40 ">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt=""
              width="130px"
              height="100px"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-10">
            <Link to="/">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/") && "text-black border-b-red-500"
                } `}
              >
                Home
              </li>
            </Link>
            <Link to="/offers">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/offers") && "text-black border-b-red-500"
                } `}
              >
                Offers
              </li>
            </Link>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              } `}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
