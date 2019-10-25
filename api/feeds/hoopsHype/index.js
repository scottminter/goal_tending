const getArticles = require('./getArticles');
const hoopsHype = {};

hoopsHype.getArticles = (numOfArticles) => {
    return getArticles(numOfArticles);
};

module.exports = hoopsHype;