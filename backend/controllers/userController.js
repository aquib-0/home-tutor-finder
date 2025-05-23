const User = require('../models/User');
const bcrypt = require('bcrypt');
// const passport = require('passport');
// require('../config/passport');

const getUser = async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

const getTutors = async(req, res)=>{
    try{
        const tutors = await User.find({role: 'tutor'});
        console.log(tutors);
        res.status(200).json(tutors);
    } catch(err)
    {
        res.status(500).json({message: "Error occurred:" + err.message});
    }
}

const getStudents = async(req, res)=>{
    try{
        const tutors = await User.find({role: 'student'});
        res.json(tutors);
    } catch(err)
    {
        res.status(500).json({message: "Error occurred:" + err.message});
    }
}

// const createUserData = async (data) => {
//     try {
//         const newUser = await User.create(data);
//         console.log("User created via passport");
//         return newUser;
//     } catch (err) {
//         console.error("User creation error:", err);
//         throw err;
//     }
// };

const createUser = async (req, res)=>{
    const data = req.body;
    try{
        const newUser = await User.create(data);
        console.log("User created");
        
        res.status(201).json(newUser);
    } catch(err){
        res.status(500).json({message: err.message});
        console.log(err);
    }
};

const loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user)
        {
            res.status(401).json({message: "Invalid credentials - no such user exists"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            res.status(401).json({message: "Invalid credentials - email or password mismatch"});
        }
        console.log("User successfully logged in");
        return res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            bio: user.bio,
        });
    } catch(err){
        res.status(500).json({message: err.message});
        console.log(err);
    }
}

// const loginUser = (req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {
//       if (err) return next(err);
//       if (!user) return res.status(401).json({ message: info.message });
  
//       req.logIn(user, (err) => {
//         if (err) return next(err);
//         return res.status(200).json({
//           _id: user._id,
//           username: user.username,
//           email: user.email,
//           avatar: user.avatar,
//           bio: user.bio,
//         });
//       });
//     })(req, res, next);
//   };
  

module.exports = {getUser, createUser, loginUser, getTutors, getStudents};