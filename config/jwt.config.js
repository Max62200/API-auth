const jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = 'vd1vqvfd4s51vfd5vfds5vdc552vcds7gfe97gdfsvfsd449lkjhuh97azerds';

module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id
        },
        JWT_SIGN_SECRET,{
            expiresIn: '1h'
        })
    }
}