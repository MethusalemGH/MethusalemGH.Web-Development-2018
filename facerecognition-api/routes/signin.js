const handleSignIn = (req, res, db, bcrypt) => {
  const { email, password } = req.body;

  db(`login`)
    .select(`*`)
    .where({ email: email })
    .then((login) => {
      const isValid = bcrypt.compareSync(password, login[0].hash);
      if (isValid) {
        return db(`users`)
          .select(`*`)
          .where({ email: login[0].email })
          .then((user) => res.json(user[0]))
          .catch(() => res.status(400).json(`Error getting user information`));
      } else {
        res.status(400).json(`Incorrect credentials`);
      }
    })
    .catch(() => res.status(400).json(`Error getting login information`));
};

module.exports = {
  handleSignIn: handleSignIn
};
