const clientModel = require('../schemas/ClientModel.js');

const save = async (obj) => (new clientModel(obj).save());
const get = async () => (clientModel.find());
const getById = async (id) => (clientModel.findOne({identity: id}));
const update = async (id, obj) => (clientModel.updateOne({identity: id}, obj ));
const remove = async (id) => (clientModel.deleteOne({identity: id}));
const getClientPages = async (options) => (clientModel.paginate({}, options));

module.exports = {
    save,
    get,
    getById,
    update,
    remove,
    getClientPages
};