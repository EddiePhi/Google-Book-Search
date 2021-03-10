// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function OurNav() {
  const location = useLocation();

  return (
    <>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/search"
              className={`${
                ["/", "/search"].includes(location.pathname)
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/saved"
              className={`${
                location.pathname === "/saved" ? "nav-link active" : "nav-link"
              }`}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
