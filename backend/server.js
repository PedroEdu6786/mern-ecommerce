const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes.js')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API running')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`)
)
