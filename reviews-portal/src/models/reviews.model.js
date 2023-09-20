module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    author: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    name: {
      type: Sequelize.STRING
    },
    group: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.ABSTRACT
    },
    rate: {
      type: Sequelize.FLOAT
    },
    description: {
      type: Sequelize.STRING
    },
    likes: {
      type: Sequelize.ABSTRACT
    },
    comments: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Review;
};