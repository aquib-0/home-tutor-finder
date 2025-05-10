const express = require('express');
const router = express.Router();
const {getUser, createUser, loginUser, getTutors, getStudents} = require('../controllers/userController');

router.get('/user', getUser);

router.get('/tutors', getTutors);

router.get('/students', getStudents);

router.post('/login', loginUser);

router.post('/register', createUser);

// router.get('/check-auth', (req, res) => {
//     if (req.isAuthenticated()) {
//       return res.status(200).json(req.user);
//     }
//     return res.status(401).json({ message: 'Not authenticated' });
//   });

  // router.post('/logout', (req, res) => {
  //   req.logout(err => {
  //     if (err) return res.status(500).json({ message: 'Logout failed' });
  //     res.status(200).json({ message: 'Logged out' });
  //   });
  // });

  // routes/userRoutes.js
// router.get('/me', (req, res) => {
//     if (req.isAuthenticated()) {
//       res.json(req.user);
//     } else {
//       res.status(401).json({ message: 'Not authenticated' });
//     }
//   });
  
  

module.exports = router;