module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INT
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    reviews: {
      type: Sequelize.ARRAY
    },
    likes: {
      type: Sequelize.ARRAY
    },
  });

  return User;
};