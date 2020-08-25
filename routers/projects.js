const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Project = require("../models/").project;
const Comment = require("../models").comment;
const Like = require("../models").like;
const Resource = require("../models").resource;

const router = new Router();

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

router.post("/newproject", authMiddleware, async (req, res) => {
  const {
    projectName,
    feLink,
    beLink,
    projectImg,
    ytUrl,
    projectDesc,
    resources,
    tags,
  } = req.body;
  console.log("req body is here ============> ", req.body.resources);
  try {
    if (!projectName || !feLink || !beLink || !projectImg || !projectDesc) {
      return res.status(400).send({ message: "Missing credentials!" });
    }

    const newProject = await Project.create({
      projectName,
      feLink,
      beLink,
      projectImg,
      ytUrl,
      projectDesc,
      userId: req.user.id,
    });
    const test = JSON.parse(resources);
    console.log(test);
    const newResources = test.map(
      async (resource) =>
        await Resource.create({ ...resource, projectId: newProject.id })
    );
    await Promise.all(newResources);
    res.send({ newProject, newResources });
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});
module.exports = router;
