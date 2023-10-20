const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.item_name || !req.body.item_quantity || !req.body.item_description) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return; 
  }

  const item = {
    item_name: req.body.item_name,
    item_quantity: req.body.item_quantity,
    item_description: req.body.item_description,
    filename: req.file ? req.file.filename : ""
  }

  Item.create(item).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the item"
    });
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

exports.delete = (req, res) => {
  const id = req.params.id;

  console.log(`Deleting item with ID: ${id}`);

  Item.destroy({
    where: { id: id },
  })
    .then((num) => {
      console.log(`Deleted ${num} items`);

      if (num === 1) {
        res.send({ message: "Item was deleted successfully!!." });
      } else {
        res.send({ message: `Cannot delete item with id=${id}. Maybe the item was not found.` });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: "Could not delete item with id=" + id,
      });
    });
};

