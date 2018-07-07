const handleProfile = (req, res, db) => {
  const { id } = req.params;
  db(`users`)
    .select(`*`)
    .where({ id: id })
    .then((user) => {
      if (user.length > 0) {
        res.json(user[0]);
      } else {
        res.status(400).json(`User doesn't exist`);
      }
    })
    .catch(() => res.status(400).json(`Error getting user information`));
};

module.exports = {
  handleProfile: handleProfile
};
