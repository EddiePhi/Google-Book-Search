// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function OurJumbotron() {
  return (
    <Jumbotron className="text-center position-relative">
      <h1 style={{ fontWeight: "300" }}>
        Google Book Search
      </h1>
    </Jumbotron>
  );
}
