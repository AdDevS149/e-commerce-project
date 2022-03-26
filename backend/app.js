const express = require('express');
const app = express();
const PORT = process.env.PORT || 5005;

const cors = require('cors')

// const path = require('path');
// const cors = require('cors');
const products = require('./ProductItems');


//Body Parser Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Get All Products
// app.get('/products', (req, res) => {
// //   res.json({ items: products });
// res.send({ items: products})
// });


// Products API Routes
app.use('/api/products', require('./routes/api/products'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
``