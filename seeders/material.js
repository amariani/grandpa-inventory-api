var faker = require("faker/locale/es_MX");

module.exports = async (quantity) => {
  console.log("== Seeding Materials Collection ==");
  for (let index = 0; index < quantity; index++) {
    await strapi.services.material.create({
      name: faker.commerce.productMaterial(),
    });
  }
};
