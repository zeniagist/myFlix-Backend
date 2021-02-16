// initialize express.js
const express = require('express'),
    morgan = require('morgan');
const  app = express();

// JSON movie list
let movieList = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling'
      },
      {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien'
      },
      {
        title: 'Twilight',
        author: 'Stephanie Meyer'
      }
];

// GET requests
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Movie Database</h1>');
} );

// express static
app.use(express.static('public'));

// Morgan middleware library
app.use(morgan('common'));

app.get('/movies', (req, res) => {
    res.json(movieList);
});

app.get('/search', (req, res) => {
    res.send('Search for movies here');
});

// listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));