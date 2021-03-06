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
    include: [Resource, { model: Comment, include: [User] }, Like, Tag],
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
  console.log("req body is here ============> ", req.body);
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
    console.log(resources, newProject.id);
    const newResources = resources.map(
      async (resource) =>
        await Resource.create({ ...resource, projectId: newProject.id })
    );
    // const test1 = JSON.parse(tags);

    const newTag = tags.map(async (tag) => {
      const tagName = await Tag.findOne({ where: { tagName: tag.tagName } });
      console.log("=============>tagName", tagName);
      if (!tagName) {
        return await Tag.create({ ...tag }).then((newtag) =>
          Tagproject.create({
            ...tag,
            tagId: newtag.id,
            projectId: newProject.id,
          })
        );
      } else {
        return await Tagproject.create({
          tagId: tagName.id,
          projectId: newProject.id,
        });
      }
    });
    const newTags = await Promise.all(newTag);
    await Promise.all(newResources).then((newResources) =>
      res.status(201).send({ newProject, newResources, newTags })
    );
  } catch (error) {
    return res.status(400).send({ message: "There is a problem" });
  }
});

router.get("/tags", async (req, res) => {
  const tags = await Tag.findAll();
  return res.status(201).send(tags);
});

router.post("/projects/:id/comment", authMiddleware, async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;

  try {
    const newComment = await Comment.create({
      comment,
      projectId: id,
      userId: req.user.id,
    });
    const finalComment = await Comment.findByPk(newComment.id, {
      include: [User],
    });

    return res.status(201).send(finalComment);
  } catch (error) {
    return res.status(400).send({ message: "There is a problem", error });
  }
});

router.post("/projects/:id/like", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const like = await Like.findOne({
    where: { userId: req.user.id, projectId: id },
  });
  try {
    if (!like) {
      const newLike = await Like.create({
        projectId: id,
        userId: req.user.id,
      });
      return res.status(201).send(newLike);
    } else {
      const deleteLike = await like.destroy();
      return res.status(201).send(deleteLike);
    }
  } catch (error) {
    return res.status(400).send({ message: "There is a problem", error });
  }
});

router.get("/projects/tags/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const projects = await Tagproject.findAll({ where: { tagId: id } });

  return res.status(201).send(projects);
});

module.exports = router;
