const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
// const cors = require('cors');
// const session = require('express-session');
// const passport = require('passport');
const connectDB = require('./config/db');
// require('./config/passport');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }));

app.use(express.json());

// app.use(session({
//     secret:  google_client_secret || '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',
//     resave: false,
//     saveUninitialized: false,
// }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/users', userRoutes);

// app.get('/auth/google',
//     passport.authenticate('google', {scope: ['email', 'profile']})
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         failureRedirect: 'http://localhost:5173/tutor-login',
//         successRedirect: 'http://localhost:5173/dashboard',
//     })
// );


connectDB()
.then(()=> app.listen(PORT, ()=> console.log("Server running on port 5000")))
.catch(err => console.log(err));