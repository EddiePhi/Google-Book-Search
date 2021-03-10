// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar({ handleSearch, inputRef }) {
  return (
    <Form onSubmit={handleSearch}>
      <Form.Group>
        <Form.Control
          ref={inputRef}
          type="text"
          className="rounded-0"
          placeholder="Ex: Slaughterhouse Five"
        />
      </Form.Group>
      <Button type="submit" className="bg-googreads rounded-0">
        Search
      </Button>
    </Form>
  );
}
