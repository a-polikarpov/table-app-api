const User = require('../models/User');

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    res.status(404).send({ error })
  }
};

module.exports.create = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      res.status(404).send({ error: 'This email already in use!' });
    } else {
      const user = new User({ firstName, lastName, email });
      user.save();
      res.status(200).send({ user });
    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

module.exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    const removedUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send({ removedUser });
  } catch(error) {
    res.status(404).send({ error });
  }
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const fieldsToUpdate = {};

  if (firstName) fieldsToUpdate.firstName = firstName;
  if (lastName) fieldsToUpdate.lastName = lastName;
  if (email) fieldsToUpdate.email = email;

  try {
    const user = await User.findOneAndUpdate({ _id: id }, {
      $set: fieldsToUpdate
    }, {new: true});
    res.status(200).send({ user });
  } catch (error) {
    res.status(404).send({ error });
  }
};
