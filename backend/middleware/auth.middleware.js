const jwt = require("jsonwebtoken")


const authMiddleware = async (req, res, next) => {
    try {
        const token = req.get("Authorization") 
        if (!token) {
            return res.status(401).json({error: "Auth token not provbided"})
        }
        const token_parts = token.split(" "); 
        if (token_parts[0] != "Bearer"){
            return res.status(400).json({error: "Bearer tokens only allowed"})
        }

        const verify = jwt.verify(token_parts[1], process.env.JWT_SECRET, {
            algorithms: ["HS256"] 
        }) 

        if (verify.username != process.env.USERNAME) {
            return res.status(401).json({error: "Invalid Username"})
        }

        next()

    } catch (error) {
        return res.status(401).json({error: "Invalid Token"})
    }
}

module.exports = {authMiddleware}
