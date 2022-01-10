const jwt = require('jsonwebtoken');
const SECRET_KEY = 'muchsecretsuchwow'

const generateToken = (user) => {
    const token = jwt.sign(user, SECRET_KEY, {expiresIn: '7d'})

    return token;
}

module.exports = {generateToken}