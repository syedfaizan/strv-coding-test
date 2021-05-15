const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("helpers/db");
const User = db.User;

module.exports = {
  getById,
  create,
};

async function getById(id) {
  return await User.findById(id);
}

async function create(userParam) {
  // validate
  const user = await User.findOneOrCreate(
    { email: userParam.email },
    userParam
  );

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();

  if (user && bcrypt.compareSync(userParam.password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, {
      expiresIn: "7d",
    });
    return {
      ...user.toJSON(),
      token,
    };
  }
}
