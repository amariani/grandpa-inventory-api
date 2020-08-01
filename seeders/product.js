var faker = require("faker/locale/es_MX");

module.exports = async (quantity) => {
  console.log("== Seeding Products Collection ==");
  for (let index = 0; index < quantity; index++) {
    await strapi.services.product.create({
      title: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      qty: faker.random.number(),
      price: faker.commerce.price(),
    });
  }
};
