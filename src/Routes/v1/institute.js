const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Get')
})

router.post('/', (req, res) => {
    res.send('Hello Post')
})

router.put('/', (req, res) => {
    res.send('Hello Put')
})

router.delete('/', (req, res) => {
    res.send('Hello Delete')
})

module.exports = router