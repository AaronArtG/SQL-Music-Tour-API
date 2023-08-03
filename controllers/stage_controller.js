const stage = require("express").Router();
const db = require("../models");
const { Stages } = db;
const { Op } = require("sequelize");

// get * stages
stage.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll();
    res.status(200).json(foundStages);
  } catch (e) {
    res.status(500).json(e);
  }
});

// get one stage
stage.get("/:id", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json(foundStage);
  } catch (e) {
    res.status(500).json(e);
  }
});

// create stage
stage.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json(newStage);
  } catch (e) {
    res.status(500).json(e);
  }
});

// update stage
stage.put("/:id", async (req, res) => {
  try {
    const updatedStages = await Stage.update(req.body, {
      where: { stage_id: req.params.id },
    });
    res.status(200).json({
      message: `Updated ${updatedStages} stages`,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

// delete stage
stage.delete("/:id", async (req, res) => {
  try {
    const deletedStages = await Stage.destroy({
      where: { stage_id: req.params.id },
    });
    res.status(200).json({
      message: `Deleted ${deletedStages} stages`,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = stage;
