'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let data = require('../db.json').Story.map(el => {
    delete el.id
    el.createdAt = el.updatedAt = new Date()
    return el })
   await queryInterface.bulkInsert('Stories', data)
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Stories', null, {});
  }
};
