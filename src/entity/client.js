const ClientModel = require('../schemas/ClientSchema');

const save = async (obj) => (new ClientModel(obj).save());
const getAll = async () => (
    ClientModel.find()
        .populate('category')
        .populate('user')
);
const getById = async (id) => (
    ClientModel.findOne({ identity: id })
        .populate('category')
        .populate('user')
);
const update = async (id, obj) => (ClientModel.updateOne({ identity: id }, obj));
const remove = async (id) => (ClientModel.deleteOne({ identity: id }));
const getClientPages = async (options) => (ClientModel.paginate({}, options));

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove,
    getClientPages,
};
