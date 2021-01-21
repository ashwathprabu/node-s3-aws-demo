const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()
const PORT = 5000

app.use(expressLayouts)

app.set('views', path.join(__dirname,'./src/views/layouts'))
app.set('view engine','ejs')
app.use('/api/v1/aws-s3-upload-document', require('./src/router/controller'))

// app.use('/', require('./src/router/controller'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})