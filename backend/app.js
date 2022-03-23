const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5005;

// const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Products API Routes
app.use('/api/products', require('./routes/api/products'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
