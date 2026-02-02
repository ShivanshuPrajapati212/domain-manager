const jwt = require("jsonwebtoken");

const getToken = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "username and password not provieded" });
    }
    const real_username = process.env.USERNAME;
    const real_password = process.env.PASSWORD;

    if (!real_username || !real_password) {
      return res.status(400).json({ error: "Internal Server Error" });
    }

    if (username != real_username) {
      return res.status(400).json({ error: "Username not valid" });
    }
    if (password != real_password) {
      return res.status(400).json({ error: "invalid password" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    return res.status(200).json({ token });

  } catch (error) {
    console.log(err);
  }
};

module.exports = { getToken };
