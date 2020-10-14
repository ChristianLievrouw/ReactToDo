import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
