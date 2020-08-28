const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Project = require("../models/").project;
const Comment = require("../models").comment;
const Like = require("../models").like;
const Tag = require("../models").tag;

const Resource = require("../models").resource;

const router = new Router();

router.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Project });
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

router.get("/homepage", async (req, res) => {
  const projects = await Project.findAll({
    include: [Comment, Like, Tag],
  });
  try {
    return res.status(201).send(projects);
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});

router.patch("/users/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    console.log("user=========>", user, id);
    if (user.id == id) {
      const newUser = await user.update(req.body);
      delete newUser.dataValues["password"];

      return res.status(200).send({ ...newUser.dataValues });
    }
    return res.status(400).send({ message: "userId doesn't match with email" });
  } catch (error) {
    return res.status(400).send({ message: "There is a problem", error });
  }
});

module.exports = router;
