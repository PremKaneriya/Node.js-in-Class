const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Category Get')
})

router.post('/', (req, res) => {
    res.send('Category Post')
})

router.put('/', (req, res) => {
    res.send('Category Put')
})

router.delete('/', (req, res) => {
    res.send('Category Delete')
})

module.exports = router