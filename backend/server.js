const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    app.get('/', (req, res) => {
        res.send('API running')
    })
}

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
)

const dirname = path.resolve()

app.use('/uploads', express.static(path.join(dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
    )
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`)
)
