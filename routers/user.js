const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Project = require("../models/").project;
const Comment = require("../models").comment;
const Like = require("../models").like;
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
    include: [Comment, Like],
  });
  try {
    return res.status(201).send(projects);
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});

router.get("/projects/:id", async (req, res) => {
  const project = await Project.findByPk(req.params.id, {
    include: [Resource, Comment, Like],
  });

  try {
    if (!project) {
      return res
        .status(400)
        .send({ message: "There is an existing project with this id" });
    }
    const userId = project.userId;
    const user = await User.findByPk(userId);
    return res.status(201).send({ project, user });
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});
module.exports = router;
