const uuid = require('node-uuid');
const userEntity = require('../entity/user');
const { responseSuccess, responseError } = require('../utils/responses');

const create = async (obj) => {
    const existUser = await userEntity.getByUsername(obj.username);
    if (existUser != null) {
        return { code: 400, message: 'El usuario esta duplicado' };
    }
    const userResult = await userEntity.save(Object.assign(obj, { identity: uuid.v4() }));
    return userResult;
};

const validLogin = async (req, res) => {
    const user = await userEntity.getByUsername(req.body.username);
    const userValid = user.verifyPasswordSync(req.body.password);
    if (!userValid) return responseError(res, { code: 401, message: 'Sin acceso al servicio' });
    if (!user.enable) return responseError(res, { code: 403, message: 'el usuario no esta activo favor de comunicarte con el administrador' });
    return responseSuccess(res, { objeto: user });
};

module.exports = {
    create, validLogin,
};
