const jwt = require('jsonwebtoken');

const jwtawtmiddelware = (req, res, next) => {

    //chack request header has already authhorization
    // const authourization = req.headers.authourization;

    // if (!authourization) return res.status(401).json({ error: 'Token Not Found' });



    // const token = authourization.split(' ')[1];
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'unauthorized' });

    try {

        //verfiy the jwt token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // if (!decoded) return res.status(401).json({ error: 'unauthorized'
        

        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'invalid token' });

    }

}



// fuction to genrate jwt token

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 5000 });
}

module.exports = { jwtawtmiddelware, generateToken };
