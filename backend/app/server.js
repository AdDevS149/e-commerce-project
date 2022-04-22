const express = require('express');
const authRoutes = require('./routes/authRoutes')
// const postRoutes = require('./app/routes/postRoutes')

const app = express();

const colors = require('colors');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db.config');
const port = process.env.PORT || 5005;

const cors = require('cors');

connectDB();

app.use(cors());    
app.use(express.json());


app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/auth', authRoutes)
// app.use('/posts', postRoutes)
app.use('/api/products', require('./routes/productRoutes'));





app.get('/', (req, res) => {
    res.send("Hey there are you working")
})



app.listen(port, () => console.log(`Listening on port ${port}`));