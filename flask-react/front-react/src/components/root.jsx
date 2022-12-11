
import * as React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu/Menu";

export default function Root() {
  return (
    <>
      <Menu></Menu>
      <div id="sidebar" className="container">
        <h1>Login</h1>

      </div>
    </>
  );
}