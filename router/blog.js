const express = require('express')
const app = express()
const router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('hello blogssss')
})
router.get('/blog/:slug', (req,res)=>{
    res.send(`helo blog ${req.params.slug} `)
})

module.exports = router;