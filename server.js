require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')


// Connect DB
connectDB();
app.use(cors())
app.use(express.json());

// app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/private', require('./routes/privateRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Error Handler - should be last placed middleware
app.use(errorHandler)




const PORT = process.env.PORT || 5005;

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
// const authRoutes = require('./routes/authRoutes')
// // const postRoutes = require('./app/routes/postRoutes')

// const colors = require('colors');
// const dotenv = require('dotenv').config();

// const { errorHandler } = require('./middleware/errorMiddleware');

// const connectDB = require('./config/db.config');
// const port = process.env.PORT || 5005;

// const cors = require('cors');

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(errorHandler);

// app.use('/auth', authRoutes)
// // app.use('/posts', postRoutes)
// app.use('/api/products', require('./routes/productRoutes'));

// app.get('/', (req, res) => {
//     res.send("Hey there are you working")
// })

// app.listen(port, () => console.log(`Listening on port ${port}`));
