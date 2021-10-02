const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

//db
const mongoose = require('mongoose')
const Instructor = require('./models/instructor')

//connect to mongodb
const dbURI = 'mongodb+srv://steffen:test1234@cluster0.emavr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!').end();
});


app.get('/instructors', (req, res) => {
    Instructor.find()
        .then( result => {
            res.send(result)   
        })
        .catch( err => console.log(err))
})

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
        console.log('Press Ctrl+C to quit.');
    }))
    .then(() => console.log('App Running & DB connected'))
    .catch( err => console.log(err))

