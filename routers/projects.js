const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Project = require("../models/").project;
const Comment = require("../models").comment;
const Like = require("../models").like;
const Resource = require("../models").resource;
const Tag = require("../models").tag;
const Tagproject = require("../models").tagproject;

const router = new Router();

router.get("/projects/:id", async (req, res) => {
  const project = await Project.findByPk(req.params.id, {
    include: [Resource, Comment, Like, Tag],
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
  console.log("req body is here ============> ", req.body.tags);
  try {
    if (
      !projectName ||
      !feLink ||
      !beLink ||
      !projectImg ||
      !projectDesc ||
      !resources
    ) {
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
    console.log(test, newProject.id);
    const newResources = test.map(
      async (resource) =>
        await Resource.create({ ...resource, projectId: newProject.id })
    );
    const test1 = JSON.parse(tags);

    const newTag = test1.map(async (tag) => {
      if (!tag.id) {
        return await Tag.create({ ...tag }).then((newtag) =>
          Tagproject.create({
            ...tag,
            tagId: newtag.id,
            projectId: newProject.id,
          })
        );
      } else {
        return await Tagproject.create({ ...tag, projectId: newProject.id });
      }
    });
    const newTags = await Promise.all(newTags);
    await Promise.all(newResources).then((newResources) =>
      res.status(201).send({ newProject, newResources, newTags })
    );
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});

module.exports = router;
