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

app.use(express.static('public'));

app.use(morgan('common'));

// GET a list of ALL movies to the user
app.get('/movies', (req, res) => {
    res.json(movieList);
});

// GET data about a single movie by title to the user
app.get('/movies/title', (req, res) => {
    res.send('Return a list of ALL movies to the user');
});

// GET data about a genre by name/title
app.get('/movies/genres/title', (req, res) => {
    res.send('Return data about a genre (description) by name/title (e.g., “Thriller”)');
});

// GET data about a director by name
app.get('/movies/directors/name', (req, res) => {
    res.send('Return data about a director (bio, birth year, death year) by name');
});

// POST new users to register
app.get('/users', (req, res) => {
    res.send('Allow new users to register');
});

// PUT updated to username
app.get('/users/username', (req, res) => {
    res.send('Allow users to update their user info (username)');
});

// POST movie to user's favorites list
app.get('/users/username/movies/movieName', (req, res) => {
    res.send('Allow users to add a movie to their list of favorites (showing only a text that a movie has been added)');
});

// DELETE movie from user's favorites list
app.get('/users/username/movies/movieName', (req, res) => {
    res.send('Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed)');
});

// DELETE a user from registration database
app.get('/users/username', (req, res) => {
    res.send('Allow existing users to deregister (showing only a text that a user email has been removed)');
});

// listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));