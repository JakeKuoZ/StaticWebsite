const express = require("express");
const exphbs = require("express-handlebars")

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'));
app.use('/images', express.static('public/images'));

const handlerbarInstance = exphbs.create({
	defaultLayout: "main"
})

app.engine('handlebars', handlerbarInstance.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us'
    });
});

app.post('/contact', (req , res) =>{
    res.render('submit' ,{
        title:"Success!"
    })
})

app.get('/career', (req, res) => {
    res.render('career', {
        title:'Career'
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})