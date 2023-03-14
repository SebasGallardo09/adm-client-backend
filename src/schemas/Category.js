const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const categorySchema = new Schema(
    {
        identity: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    { versionKey: false },
);

categorySchema.plugin(mongoosePaginate);
const modelClient = model('Category', categorySchema);
modelClient.paginate().then({});
module.exports = modelClient;
