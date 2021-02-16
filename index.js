// initialize express.js
const express = require('express'),
    morgan = require('morgan');
const  app = express();

// JSON movie list
let movieList = [
    {
        movie: 'Timer',
        director: 'Jac Schaeffer',
        genre: 'Romatic Comedy'
    },
    {
        movie: 'Baby Driver',
        director: 'Edgar Wright',
        genre: 'Action'
    },
    {
        movie: 'Frequencies',
        director: 'Darren Paul Fisher',
        genre: 'Mystery'
    },
    {
        movie: 'The Grand Budapest Hotel',
        director: 'Wes Anderson',
        genre: 'Adventure'
    },
    {
        movie: 'Incident in a Ghostland',
        director: 'Pascal Laugier',
        genre: 'Horror'
    },
    {
        movie: 'What We Do in the Shadows',
        director: 'Jermaine Clement',
        genre: 'Comedy'
    },
    {
        movie: 'It Follows',
        director: 'David Robert Mitchell',
        genre: 'Horror'
    },
    {
        movie: 'La La Land',
        director: 'Damien Chazelle',
        genre: 'Muscial Comedy'
    },
    {
        movie: 'Everything Everything',
        director: 'Stella Meghie',
        genre: 'Drama'
    },
    {
        movie: 'The Call',
        director: 'Chung-Hyun Lee',
        genre: 'Horror'
    }
];

// GET requests
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Movie Database</h1>');
} );

// serves documentation.html
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