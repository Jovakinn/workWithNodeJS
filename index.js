const express = require('express');
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)

const helloResponse = app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
const contactResponse = app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

if (app.get !== helloResponse && app.get !== contactResponse){
    app.get((req, res) => {
        res.sendFile(__dirname + "/public/error.html");
    });
}

async function start() {
    try {
        await mongoose.connect('mongodb+srv://jovakinn:1q2w3e4r@cluster0.endkw.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}
start()