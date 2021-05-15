const mongoose = require("mongoose");
const findOneOrCreate = require("mongoose-findoneorcreate");
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  hash: { type: String },
});

// make sure to leak out password hashes
schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

schema.plugin(findOneOrCreate);

module.exports = mongoose.model("User", schema);
