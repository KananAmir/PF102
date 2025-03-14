const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const User = require('../models/userSchema');

const register = async (req, res) =>{
    const {username, email, password} = req.body;

    const existUser = await User.findOne({email: email});

    try {
        if(existUser){
            return res.status(400).json({status: 'error', message: 'Email already exist'});
        }
       const hashedPassword = await bcrypt.hash(password, 10)

        // console.log(hashedPassword);
       
        const newUser = new User({username, email, password: hashedPassword}); 
        
        // console.log(req.body);

        await newUser.save();

        res.status(201).json({status: 'success', message: 'User registered successfully'});
        
    } catch (error) {
        res.status(500).json({status: 'error', message: error.message});
    }
}
const login = async (req, res) =>{
    const {email, password} = req.body;

    const existUser = await User.findOne({email})

//     if(!existUser){
//         return res.status(400).json({status: 'error', message: 'User not found | No such user with this email!'});
//     }
//     console.log(email, password);
    
//     const isValidPassword = await bcrypt.compare(password, existUser.password);

//     if(!isValidPassword){
//         return res.status(400).json({status: 'error', message: 'Invalid password'});
//     }

    if(!existUser || !(await bcrypt.compare(password, existUser.password))){
        return res.status(400).json({status: 'error', message: 'Invalid email or password'});
    }


    const token = jwt.sign(
        {username: existUser.username, role: existUser.role}, 
        process.env.JWT_SECRET,  
        { expiresIn: 60 * 60 },
        // { expiresIn: "1h" }
        // { expiresIn: 60 }
    );

    console.log(token);
    

    res.status(200).json({status: 'success', message: 'User logged in successfully', token: `Bearer ${token}`});
    
}


module.exports = {
    register,
    login
}