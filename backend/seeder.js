const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users.js')
const products = require('./data/products.js')
const User = require('./models/userModel.js')
const Product = require('./models/productModel.js')
const Order = require('./models/orderModel.js')
const connectDB = require('./config/db.js')

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported!')
        process.exit()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log('Data destroyed!')
        process.exit()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
