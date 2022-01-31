const {createUser} = require('../services/user.service')
const {generateToken} = require('../services/token.service');

function login(req, res) {
    res.send('HELLLLOOO')
}

async function register(req, res) {
    try {
        console.log("hey!")
        const user = await createUser(req.body);
        const token = generateToken(user);

        return res.status(200).json({user, token})
    } catch (err) {
        if(err == 'User already exists') return res.status(400).json({email: 'Already in use'})
        else return res.status(400).json({email: 'Unexpected error'})
    }
}

module.exports = {login, register}