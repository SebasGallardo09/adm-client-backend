const { responseSuccess, responseError } = require("../utils/responses");

const getClientId = (req, res, next) => {
    console.log("get by id")
    return responseSuccess(res, {});
    
};

const getClient = (req, res, next) => {
    console.log("get client")
    return responseSuccess(res, {});
};

const createClient = (req, res, next) => {
    console.log("create")
    return responseSuccess(res, {});
};

const updateClient = (req, res, next) => {
    console.log("update")
    return responseSuccess(res, {});
};

const deleteClient = (req, res, next) => {
    console.log("delete")
    return responseSuccess(res, {});
};

module.exports = {
    createClient, updateClient, getClientId, getClient, deleteClient
};