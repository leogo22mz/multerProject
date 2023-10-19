module.exports = app => {
  
  const items = require("../controllers/item.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  router.post("/", upload.single('file'), items.create);

  router.get("/", items.findAll);

  router.get("/:id", items.findOne);

  router.put("/:id", items.update);

  router.delete("/:id", items.delete);

  app.use("/api/items", router);
}