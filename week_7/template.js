const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Display form
app.get('/', (req, res) => {
    res.render('index', {
        message: null,
        name: null
    });
});

// Accept form data
app.post('/register', (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    // Basic validation
    if (!name || name.length < 3) {
        return res.render('index', {
            message: 'Name must contain at least 3 characters.',
            name: null
        });
    }

    if (!age || age < 18) {
        return res.render('index', {
            message: 'Age must be 18 or above.',
            name: null
        });
    }

    // Successful registration
    res.render('index', {
        message: 'Registration successful!',
        name: name
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});