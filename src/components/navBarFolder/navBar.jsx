import React from "react";
import "./navBar.css";

export const NavBar = ({ totalCount }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg my-nav">
        <a className="navbar-brand" href="#">
          Total
        </a>
        <span className="btn btn-primary total">{totalCount}</span>
      </nav>
    </>
  );
};
