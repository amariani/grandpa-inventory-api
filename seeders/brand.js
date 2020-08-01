var faker = require("faker/locale/es_MX");

module.exports = async (quantity) => {
  console.log("== Seeding Brand Collection ==");
  for (let index = 0; index < quantity; index++) {
    await strapi.services.brand.create({
      name: faker.company.companyName(),
    });
  }
};
