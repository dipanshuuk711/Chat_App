import asyncHandler from 'express-async-handler';
import User from '../Models/userModel.js';
import { generateToken } from '../config/genrateToken.js';
import bcrypt from 'bcrypt';

export const resgisterUser = asyncHandler(async (req, res) => {
     const { name, email, password, pic } = req.body;
     if (!name || !email || !password) {
          res.status(400);
          throw new Error('Please add all fields');
     }

     const userExists = await User.findOne({ email });
     if (userExists) {
          res.status(400);
          throw new Error("User already exists")
     };

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);


     const user = await User.create({
          name: name,
          email: email,
          password: hashedPassword,
          pic: pic
     });

     if (user) {
          res.status(201).json({
               _id: user._id,
               name: user.name,
               email: user.email,
               pic: user.pic,
               token: generateToken(user._id),
          })
     }
     else {
          res.status(401)
          throw new Error("Invalid user data")
     }
});

export const authUser = asyncHandler(async (req, res) => {
     const { email, password } = req.body;

     const user = await User.findOne({ email });
     const userPassword = user.password;
     if (user && (await bcrypt.compare(password, userPassword))) {
          res.json({
               _id: user._id,
               name: user.name,
               password: user.password, 
               email: user.email,
               pic: user.pic,
               token: generateToken(user._id),
          })
     }
     else {
          res.status(401)
          throw new Error("Invalid email or password")
     }
})

