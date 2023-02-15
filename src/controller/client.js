const { responseSuccess, responseError } = require("../utils/responses");
const clientEntity = require("../entity/client");

const getClientId = async (req, res, next) => {
    const result = await clientEntity.getById(req.params.id);
    return responseSuccess(res, { objeto: result });    
};

const getClient = async (req, res, next) => {
    const result = await clientEntity.get();
    return responseSuccess(res, { lista: result });
};

const createClient = async (req, res, next) => {
    try {
        const result = await clientEntity.save(req.body);
        return responseSuccess(res, { identity: result.identity, nameClient: result.nameClient });
    } catch (e) {
        return responseError(res, { });
    }
};

const updateClient = async (req, res, next) => {
    const result = await clientEntity.update(req.params.id, req.body);
    return responseSuccess(res, { objeto: result });
};

const deleteClient = async (req, res, next) => {
    console.log(req.params.id)
    const result = await clientEntity.remove(req.params.id);
    return responseSuccess(res, { objeto: result });
};

module.exports = {
    createClient, updateClient, getClientId, getClient, deleteClient
};