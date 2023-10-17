const db = require("../models");
const item = db.item;
const Op = db.Sequelize.Op;

// Create and Save a new Bicycle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Bicycle
  const item = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : ""
  }

  // Save Bicycle in the database
  item.create(item).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the item"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  item.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all item"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {

}

// Update a Bicycle by the id in the request
exports.update = (req, res) => {

};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {

};
