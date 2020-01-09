const User = require('../models/User');

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(404).send({ error })
  }


};

module.exports.create = (req, res) => {

};

module.exports.remove = (req, res) => {

};

module.exports.update = (req, res) => {

};
