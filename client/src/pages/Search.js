// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React, { useRef, useState } from 'react'
import Section from '../components/Section'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'
import BookCard from '../components/BookCard'

export default function Search() {
    const inputRef = useRef()

    const [books, setBooks] = useState([])
    const [currQuery, setCurrQuery] = useState("")

    const getBook = async (query) => {
        const results = await API.getGoogleBooks(query.split(" ").join("+")).
        setBooks(results.data.items)
    }

    const handleSave = async (bookData) => {
        await API.saveBook({
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.imageLinks.thumbnail,
            link: bookData.infoLink
        })
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        // Get query from input & validate
        const query = inputRef.current.value
        if (!query) return

        // Get books & set current query
        await getBook(query)
        setCurrQuery(query)
    }

    return (
        <div>
            <Section title="Book Search">
                <SearchBar handleSearch={handleSearch} inputRef={inputRef} />
            </Section>
            <Section title="Results">
                {
                    books.length ? books.map((book) => (
                        <BookCard
                            key={book.etag}
                            bookData={book.volumeInfo}
                            handleSave={handleSave}
                        />
                    )) : <h3 className="text-muted">No results found</h3>
                }
            </Section>
        </div>
    )
}
