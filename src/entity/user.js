const UserModel = require('../schemas/UserSchema');

const save = (obj) => (new UserModel(obj).save());
const getByUsername = (username) => (UserModel.findOne({ username }));
const validarUsername = (username, password) => (UserModel.findOne({ username, password }));

module.exports = {
    save, getByUsername, validarUsername,
};
