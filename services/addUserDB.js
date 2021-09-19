const UserModal = require('../database/models/users');

async function addUser(data) {
    const {name, age, description} = data;
    const user = new UserModal({name, age, description});
    await user.save();
    return user;
}

module.exports = addUser;