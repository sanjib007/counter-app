import React, { Component } from "react";

const Navbar = ({ totulCountersObj }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secoundary">
          {totulCountersObj}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
