const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'https://my-website.com' // Replace with your website's domain
  }));
  
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'brgy.607' // password: password1
  },
 
];

const JWT_SECRET = 'kingJay';

app.post('/Login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!result) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
