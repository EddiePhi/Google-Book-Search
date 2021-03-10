// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import BookCard from '../components/BookCard'
import API from '../utils/API'

export default function Saved() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = async () => {
        const results = await API.getBooks()
        setBooks(results.data)
    }

    const handleDelete = async (bookId) => {
        await API.deleteBook(bookId)
        setBooks(books.filter(book => book._id !== bookId))
    }

    return (
        <div>
            <Section title="Saved Books">
                {
                    books.length ? books.map((book) => (
                        <BookCard
                            key={book.link}
                            bookData={book}
                            handleDelete={handleDelete}
                        />
                    )) : <h3 className="text-muted">No Saved Books</h3>
                }
            </Section>
        </div>
    )
}