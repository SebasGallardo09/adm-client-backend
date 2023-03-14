const uuid = require('node-uuid');
const { responseSuccess, responseError } = require('../utils/responses');
const clientEntity = require('../entity/client');

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
        const objectInsert = Object.assign(req.body, { identity: uuid.v4() });
        const result = await clientEntity.save(objectInsert);
        return responseSuccess(res, { identity: result.identity, nameClient: result.nameClient });
    } catch (e) {
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
    };
    const result = await clientEntity.getClientPages(options);
    return responseSuccess(res, { objeto: result });
};

module.exports = {
    createClient, updateClient, getClientId, getClient, deleteClient, getClientPages,
};
