const CategorySchema = require('../schemas/CategorySchema');

const save = async (obj) => (new CategorySchema(obj).save());
const getAll = async () => (CategorySchema.find());
const getById = async (id) => (CategorySchema.findOne({ identity: id }));
const update = async (id, obj) => (CategorySchema.updateOne({ identity: id }, obj));
const remove = async (id) => (CategorySchema.deleteOne({ identity: id }));
const getCategoryPage = async (options) => (CategorySchema.paginate({}, options));

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove,
    getCategoryPage,
};
