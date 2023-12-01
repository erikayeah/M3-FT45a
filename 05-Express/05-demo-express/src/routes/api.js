const express = require("express");
const { getApi } = require("../controllers/apiController");
const apiRouter = express.Router();

//* CRUD de api
apiRouter.get("/:name/:lastname", getApi);
apiRouter.get("/:name/:lastname/:id", (req, res) => {
  res.json(req.params);
});

module.exports = apiRouter;