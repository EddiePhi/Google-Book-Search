// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Section({ children, title }) {
    return (
        <Container className="border p-4">
            <h2 className="mb-3">{title}</h2>
            <div>
                {children}
            </div>
        </Container>
    )
}