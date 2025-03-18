const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const User = require('../models/userSchema');
const transporter = require('../config/emailTransporter');

const register = async (req, res) => {
    const { username, email, password } = req.body;

    const existUser = await User.findOne({ email: email });

    try {
        if (existUser) {
            return res.status(400).json({ status: 'error', message: 'Email already exist' });
        }

        const verificationToken = jwt.sign(
            {username, email, password},
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        const verificationLink = `${process.env.BASE_URL}/verify?token=${verificationToken}`

        console.log(verificationLink);
        
      await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: email, // list of receivers
            subject: "Verify Your Account!", // Subject line
            // text: "Hello world?", // plain text body
            html: `
                <h1>Verify Your Account!</h1>
                <p>Click on the link below to verify your account</p>
                <a href="${verificationLink}" style="color: red;">verify account</a>
                <p>this link is available for 1 hour!</p>
            `, // html body
        })

        res.status(200).json({status: 'success', message: 'verify your account via email'});

    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email })

    // if(!existUser){
    //     return res.status(400).json({status: 'error', message: 'User not found | No such user with this email!'});
    // }
    // console.log(email, password);

    // const isValidPassword = await bcrypt.compare(password, existUser.password);

    // if(!isValidPassword){
    //     return res.status(400).json({status: 'error', message: 'Invalid password'});
    // }

    if (!existUser || !(await bcrypt.compare(password, existUser.password))) {
        return res.status(400).json({ status: 'error', message: 'Invalid email or password' });
    }

    const token = jwt.sign(
        { username: existUser.username, role: existUser.role },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 },
        // { expiresIn: "1h" }
        // { expiresIn: 60 }
    );

    res.status(200).json({ status: 'success', 
        message: 'User logged in successfully', 
        token: `Bearer ${token}` });
}

const verifyAccount = async(req, res)=>{
    const {token} = req.query;
    try {

        if(!token){
            res.status(400).json({
                message:"token is required!"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const hashedPassword = await bcrypt.hash(decoded.password, 10)
        
        const newUser = new User({username: decoded.username, email: decoded.email, password: hashedPassword}); 

        await newUser.save();

        // res.status(201).json({ status: 'success', message: 'Account Verified Successfully!'});

        res.redirect("http://localhost:5173/login")
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    register,
    login,
    verifyAccount
}