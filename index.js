const express = require('express');
const session = require('express-session');
const app = express();


app.use(session({
    // this mandatory configuration ensures that session IDs are not predicatable
    secret: 'sander_van_jeev',
    
    // this option says if you haven't changed anything, don't resave. It is recommended and reduces session concurrency issues 
    resave: false,

    // this option says if I am new but not modified still save
    saveUninitialized: true
}));


app.get('/', (req, res, next) =>{
    res.send('hello');
});

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});