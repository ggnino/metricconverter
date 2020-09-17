const express = require('express');
const app = express();
const routes = require('./routes/api.js');
const PORT = process.env.PORT || 5000;
// Body parser
app.use(express.json())
// Set static folder
app.use(express.static(__dirname +'/client'))

// Routes
app.use('/api',routes);

app.listen(PORT,() => console.log(`Server running: ${PORT}`));