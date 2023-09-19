module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    id: {
      type: Sequelize.INT
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
      type: Sequelize.ARRAY
    },
    rate: {
      type: Sequelize.FLOAT
    },
    description: {
      type: Sequelize.STRING
    },
    likes: {
      type: Sequelize.ARRAY
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