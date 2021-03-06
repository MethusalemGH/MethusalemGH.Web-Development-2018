const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);

  db.transaction(trx => {
    trx(`login`)
      .insert({
        hash: hash,
        email: email
      })
      .returning(`email`)
      .then(loginEmail => {
        return trx(`users`)
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .returning(`*`)
          .then(user => res.json(user[0]));
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .catch(() => res.status(400).json(`Unable to register`));
};

module.exports = {
  handleRegister: handleRegister
};
