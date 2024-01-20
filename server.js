// Import express module 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 

require('./routes/html.js')(app);
require('./routes/notes.js')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public')); 
 
app.listen(PORT, () => {
    console.log(`Live server running at http://localhost:${PORT} 🚀`);
});