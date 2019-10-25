const getArticles = require('./getArticles');
const realGM = {};

realGM.getArticles = (numOfArticles) => {
  return getArticles(numOfArticles);
};

module.exports = realGM;
