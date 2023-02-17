'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    username: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    story: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT,
    time: DataTypes.STRING,
    postId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};