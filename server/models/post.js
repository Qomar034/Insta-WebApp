'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    username: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    postUrl: DataTypes.STRING,
    caption: DataTypes.TEXT,
    likes: DataTypes.NUMBER,
    commentsCount: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};