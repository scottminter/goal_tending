const controller = require('./controller');
const hoopsHype = {};

hoopsHype.getArticles = (numOfArticles = 1) => {
    return controller.getArticles(numOfArticles);
};

module.exports = hoopsHype;