const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  try {
    const { name, picture, email } = req.body;
    var user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      user = await new User({ name: name, email: email }).save();
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("Create User Failed");
  }
};
