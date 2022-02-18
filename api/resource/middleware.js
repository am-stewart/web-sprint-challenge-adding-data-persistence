const dbConfig = require("../../data/dbConfig");
const Resources = require("./model");

const checkResourceId = async (req, res, next) => {
  try {
    const resource = await Resources.getResourceById(req.params.id);
    if (!resource) {
      next({
        status: 404,
        message: `resource with id ${req.params.id} is not found`,
      });
    } else {
      req.resource = resource;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkResourcePayload = async (req, res, next) => {
  if (!req.body.resource_name) {
    res.status(400).json({ message: "resource name is required" });
  } else {
    next();
  }
};

const checkResourceUnique = async (req, res, next) => {
  try {
    const existingResources = await dbConfig("resources")
      .where("resource_name", req.body.resource_name)
      .first();
    if (existingResources) {
      res.status(400).json({
        message: `${req.body.resource_name} already exists as a resource`,
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkResourceId,
  checkResourcePayload,
  checkResourceUnique,
};
