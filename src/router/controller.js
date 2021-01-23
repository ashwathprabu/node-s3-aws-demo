// const { Router } = require('express')
const express = require('express')
const router = require('express').Router()

router.get('/home', async (req, res) => {
   res.render('index')
})

router.post('/upload', async (req, res) => {
   console.log(req.body)
   res.status(200).json({ status: true, message: 'hi'})
})

module.exports = router
