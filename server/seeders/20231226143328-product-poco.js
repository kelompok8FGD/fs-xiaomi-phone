"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name_product: "POCO X5 Pro 5G",
        image:
          "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_x5_pro_5g%2Fimage_poco_x5_pro_5g_black.png?alt=media&token=9c536bab-f6ca-448a-a6de-aa00400c471d",
        spesification: "Snapdragon 778G | 108MP",
        price: 3799000,
        stock: 6,
        discount: 5,
        category_ID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
