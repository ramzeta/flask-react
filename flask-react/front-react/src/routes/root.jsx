
import * as React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar" className="container">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li className="p-3">
              <Link className="btn btn-primary" to={`/users`}>Users</Link>
            </li>
            <li className="p-3">
              <Link className="btn btn-primary" to={`/navbar`}>Edit Users</Link>
            </li>
            <li className="p-3">
              <Link className="btn btn-primary" to={`/about`}>Sobre nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}