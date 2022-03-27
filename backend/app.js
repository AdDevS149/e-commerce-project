const express = require('express');
const app = express();
const PORT = process.env.PORT || 5005;

const cors = require('cors');

// const path = require('path');

//Body Parser Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));


// Products API Routes
app.use('/api/products', require('./routes/api/products'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
``;
