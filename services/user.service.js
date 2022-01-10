const UserModel = require('../models/user.model')


const getUserByEmail = async (email) => {
    const user = await UserModel.findOne({email})
    return user;
}

const createUser = async (data) => {  
    const userExists = await getUserByEmail(data.email);
    if(userExists) {
        throw 'User already exists'
    }

    const newUser = await UserModel.create({
        name: data.name,
        email: data.email,
        password: data.password
    })

    return newUser.toJSON();

}

module.exports = {getUserByEmail, createUser}