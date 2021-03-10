// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05
// https://developers.google.com/books/docs/v1/using

const router = require('express').Router();
const axios = require('axios')
require('dotenv').config()

// route for '/api/googlebooks'
router.route('/:id')
    .get((req, res) => {
        console.log(req)
        let url = `https://www.googleapis.com/books/v1/volumes?q=title:${req.params.id}`

        axios.get(url)
            .then(data => res.json(data.data))
            .catch(err => res.status(422).json(err))
    })

module.exports = router