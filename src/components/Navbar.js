import { Fragment } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Fragment>

              <nav className="navbar navbar-expand-sm navbar-light  bg-light">

                  <ul className="navbar-nav nav-pills">
                  <li className="nav-item m-1">
                        <NavLink className="nav-link"  to="/">Home</NavLink>
                        {/* NavLinks apply the active class when URL is same as their path */}
                    </li>
                    <li className="nav-item m-1">
                        <NavLink className="nav-link"  to="/login">Login</NavLink>
                        {/* NavLinks apply the active class when URL is same as their path */}
                    </li>
                    
                  </ul>

              </nav>

        
    </Fragment>
  )
}