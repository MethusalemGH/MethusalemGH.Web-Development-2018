const handleImage = (req, res, db) => {
  const { id } = req.body;
  db(`users`)
    .increment(`entries`, 1)
    .where({ id: id })
    .returning(`entries`)
    .then((entries) => res.json(entries))
    .catch(() => res.status(400).json(`Error updating entries for user`));
};

module.exports = {
  handleImage: handleImage
};
