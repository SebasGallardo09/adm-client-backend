const uuid = require('node-uuid');
const { responseSuccess } = require('../utils/responses');
const categoryEntity = require('../entity/client');

const createCategory = async (req, res) => {
    const objectInsert = Object.assign(req.body, { identity: uuid.v4() });
    const result = await categoryEntity.save(objectInsert);
    return responseSuccess(res, { identity: result.identity, name: result.name });
};

const getAllCategory = async (req, res) => {
    const result = await categoryEntity.get();
    return responseSuccess(res, { lista: result });
};

const getIdCategory = async (req, res) => {
    const result = await categoryEntity.getById(req.params.id);
    return responseSuccess(res, { lista: result });
};

const updateCategory = async (req, res) => {
    const result = await categoryEntity.update(req.params.id, req.body);
    return responseSuccess(res, { objeto: result });
};

const deleteCategory = async (req, res) => {
    const result = await categoryEntity.remove(req.params.id);
    return responseSuccess(res, { objeto: result });
};

const getPaginateCategory = async (req, res) => {
    const options = {
        page: req.query.page,
        limit: req.query.limit,
    };
    const result = await categoryEntity.getCategoryPage(options);
    return responseSuccess(res, { objeto: result });
};

module.exports = {
    getAllCategory,
    getIdCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getPaginateCategory,
};
