const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;

const router = new Router();

router.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  console.log("id of url is:", user);
  try {
    if (user === null) {
      return res
        .status(400)
        .send({ message: "There is an existing account with this id" });
    }
    return res.status(201).send(user);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "There is an existing account with this id" });
  }
});

module.exports = router;
