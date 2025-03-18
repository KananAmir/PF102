const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")

dotenv.config()

// const verify = (req, res, next) => {
// try {
    
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer")) {
//         return res.status(401).json({
//             message: "No or invalid authorization header",
//         });
//     }

//     const token = authHeader.split(" ")[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.role !== 'admin') {
//         return res.status(403).json({
//             message: "Unauthorized"
//         })
//     }
//     next()
// } catch (error) {
//     res.status(500).json({
//         message: "Internal Server Error",
//     })
// }
// }


const verify = (roles)=>{
    return (req, res, next)=>{
        try {
            const authHeader = req.headers.authorization;
            console.log(authHeader);
            
            if (!authHeader) {
                return res.status(401).json({
                    message: "Token is required!",
                });
            }
        
            const token = authHeader.split(" ")[1];
        
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({
                    message: "Unauthorized, You do not have an access!"
                })
            }

            next()
        } catch (error) {
            res.status(500).json({
                message: error.message,
            })
        }
    }
}

module.exports = verify