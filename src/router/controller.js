// const { Router } = require('express')
const express = require('express')
const router = require('express').Router()

router.get('/home', async (req, res) => {
   res.render('index')
})

module.exports = router
