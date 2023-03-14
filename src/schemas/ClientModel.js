const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
// const CategorySchema = require('./Category');

const clientModel = new Schema(
    {
        identity: {
            type: String,
            required: true,
            unique: true,
        },
        nameClient: {
            type: String,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: Boolean,
            default: true,
        },
        category: {
            type: [Schema.Types.ObjectId],
            ref: 'Category',
        },
    },
    { versionKey: false, autoCreate: false, autoIndex: false },
);

clientModel.plugin(mongoosePaginate);
const modelClient = model('Client', clientModel);
modelClient.paginate().then({});
module.exports = modelClient;
