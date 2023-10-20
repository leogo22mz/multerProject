module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    item_name: {
      type: Sequelize.STRING
    },
    item_quantity: {
      type: Sequelize.STRING
    },    
    item_description: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    },
  }, {
    timestamps: true,
  });

  return Item;
}
