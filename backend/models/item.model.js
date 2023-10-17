module.exports = (sequelize, Sequelize) => {
  const item = sequelize.define("item", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return item;
}