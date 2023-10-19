const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  const item = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : ""
  }

  Item.create(item).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the item"
    })
  });
};

exports.findAll = (req, res) => {
  Item.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all item"
    })
  })
};

exports.findOne = (req, res) => {}

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
