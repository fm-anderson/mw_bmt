import { NavLink, Link } from "react-router";
import { MenuItem } from "../utils/types";
import menu from "../config/menu.json";
import Theme from "./Theme";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {menu.main.map((item: MenuItem) => (
              <li key={item.url}>
                <NavLink to={item.url}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          mw
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.main.map((item: MenuItem) => (
            <li key={item.url}>
              <NavLink to={item.url}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Theme />
      </div>
    </div>
  );
}

export default Navbar;
