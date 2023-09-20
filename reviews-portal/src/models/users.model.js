module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
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
      type: Sequelize.ABSTRACT
    },
    likes: {
      type: Sequelize.ABSTRACT
    },
  });

  return User;
};