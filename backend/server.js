const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5005;

// const Product = require('../models/productModel')

const cors = require('cors')



connectDB()

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));

app.use(errorHandler);



app.listen(port, () => console.log(`Listening on port ${port}`));
