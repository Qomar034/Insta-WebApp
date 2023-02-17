'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let data = require('../db.json').Comment.map(el => {
    delete el.id
    el.createdAt = el.updatedAt = new Date()
    return el })
   await queryInterface.bulkInsert('Comments', data)
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Comments', null, {});
  }
};
