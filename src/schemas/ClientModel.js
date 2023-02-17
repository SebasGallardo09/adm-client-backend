const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const uuid = require('node-uuid');

const clientModel = new Schema(
  {
    identity: {
      type: String,
      default: (() => (uuid.v4()))
    },
    nameClient: {
      type: String
    },
    dateCreated : {
      type: Date,
      default: Date.now
    },
    status : {
      type: Boolean,
      default: true
    },
  },
  { versionKey: false }
);

clientModel.plugin(mongoosePaginate);
const modelClient = model('Client', clientModel);
modelClient.paginate().then({});
module.exports = modelClient;