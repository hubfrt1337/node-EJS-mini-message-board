const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute')
const newMessageRoute = require('./routes/messageRoute')

app.set("view engine", "ejs")



app.use('/new', newMessageRoute);
app.use('/', indexRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

