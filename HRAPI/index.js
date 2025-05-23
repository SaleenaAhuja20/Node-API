const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 

// app.get('/', async (req, res) => {
//     try {
//         res.json('Welcome TO HR API')
//     } catch (err) {
//         res.status(500).json({ Error: err.message })
//     }
// });

app.post('/signup', async(req, res) => {
    console.log('Signup request body:', req.body);
    const {user_name, user_email, user_password} = req.body;

    try{
        // check if user exist
        const userExists = await pool.query('select * from users where user_email = $1', [user_email]);
        
        if(userExists.rows.length > 0){
            return res.status(400).json({ message: 'User already exists!'});
        }


        // insert user
        await pool.query('insert into users (user_name, user_email, user_password) values ($1, $2, $3)', [user_name, user_email, user_password]);
        res.status(201).json({ message: 'User Registered Successfully'})
    }catch(err){
        console.error(err.message);
    res.status(500).json({ message: 'Server error' });
    }
})

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
    console.log(`Connected Successfully...on PORT ${PORT}`)
});

