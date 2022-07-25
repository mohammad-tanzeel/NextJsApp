require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/users');

exports.user_registration = async function (req, res) {
  const data = "user";
  console.log(req.body);

  try {
    // res.send({ message: "User added" });
    let oneuser = await Users.findOne({ email: req.body.email });
    if (oneuser) {
      // throw 'Email "' + oneuser.email + '" is already taken';
      res.status(422).send({ 'error': 'Email "' + oneuser.email + '" is already taken' });
    } else {
      const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      //  console.log(users);
      if (newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10);

        // newUser.hash = bcrypt.hashSync(newUser.password, 10);
      }
      console.log(newUser);
      // save user
      await newUser.save();
      res.send({ message: "User Added Successfully", data: newUser });
    }
  } catch (err) {
    res.status(501).send({ 'error': err });
  }
}

exports.user_login = async function (req, res) {

  try {
    // Get user input
    const { email, password } = req.body;
    // const email = req.body.email;
    // const password = req.body.password;

    // Validate user input
    if (!(email && password)) {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send({ error: "All input is required" });
    }
    // Validate if user exist in our database
    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        'access',
        {
          expiresIn: "2h",
        }
      );

      const refresToken = jwt.sign(
        { user_id: user._id, email },
        'refresh',
        {
          expiresIn: "2d",
        }
      );
      // save user token
      user.token = token;
      user.refresToken = refresToken;
      // user
      console.log(user);
      res.status(200).json(user);
    }
    res.status(400).send({ error: "Invalid Credentials" });
    // res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}
