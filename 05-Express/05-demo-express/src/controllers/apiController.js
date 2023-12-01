const getApi = (req, res) => {
  res.json(req.params);
}

module.exports = { getApi }