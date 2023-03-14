const ClientModel = require('../schemas/ClientModel');

const save = async (obj) => (new ClientModel(obj).save());
const get = async () => (ClientModel.find());
const getById = async (id) => (ClientModel.findOne({ identity: id }));
const update = async (id, obj) => (ClientModel.updateOne({ identity: id }, obj));
const remove = async (id) => (ClientModel.deleteOne({ identity: id }));
const getClientPages = async (options) => (ClientModel.paginate({}, options));

module.exports = {
    save,
    get,
    getById,
    update,
    remove,
    getClientPages,
};
