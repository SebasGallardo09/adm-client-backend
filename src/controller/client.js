const uuid = require('node-uuid');
const { responseSuccess, responseError } = require('../utils/responses');
const clientEntity = require('../entity/client');
const userCtrl = require('../controller/user');

const getClientId = async (req, res) => {
    const result = await clientEntity.getById(req.params.id);
    return responseSuccess(res, { objeto: result });
};

const getClient = async (req, res) => {
    const result = await clientEntity.getAll();
    return responseSuccess(res, { objeto: result });
};

const createClient = async (req, res) => {
    try {
        const userResult = await userCtrl.create(req.body.user);
        if (userResult.code === 400) throw userResult;
        const objectInsert = {
            identity: uuid.v4(),
            user: userResult,
            category: req.body.category,
        };
        const result = await clientEntity.save(objectInsert);
        return responseSuccess(res, { identity: result.identity, nameClient: result.nameClient });
    } catch (e) {
        if (e.code === 400) return responseError(res, e);
        return responseError(res, { });
    }
};

const updateClient = async (req, res) => {
    const result = await clientEntity.update(req.params.id, req.body);
    return responseSuccess(res, { objeto: result });
};

const deleteClient = async (req, res) => {
    const result = await clientEntity.remove(req.params.id);
    return responseSuccess(res, { objeto: result });
};

const getClientPages = async (req, res) => {
    const options = {
        page: req.query.page,
        limit: req.query.limit,
        populate: 'category',
    };
    const result = await clientEntity.getClientPages(options);
    return responseSuccess(res, { objeto: result });
};

module.exports = {
    createClient, updateClient, getClientId, getClient, deleteClient, getClientPages,
};
