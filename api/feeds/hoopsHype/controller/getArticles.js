const BProm = require('bluebird');
const axios = require('axios');
const _ = require('lodash');

module.exports = (numOfArticles = 1) => {
    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhoopshype.com%2Ffeed%2F';
    /*
    const [author, setAuthor] = useState(null);
    const [content, setContent] = useState(null);
    const [guid, setGuid] = useState(null);
    const [link, setLink] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState(null);
    const [pubDate, setPubDate] = useState(null);
    */

    return new BProm((resolve, reject) => {
        axios.get(URL)
            .then((resp) => {
                const data = _.get(resp, 'data.items');
                const articles = [];
                data.forEach((article, i) => {
                    console.log('i: ', i);
                    if (i < numOfArticles) {
                        articles.push({
                            guid: _.get(article, 'guid'),
                            author: _.get(article, 'author'),
                            link: _.get(article, 'link'),
                            thumbnail: _.get(article, 'thumbnail'),
                            title: _.get(article, 'title'),
                            pubDate: _.get(article, 'pubDate'),
                            content: _.get(article, 'content'),
                        });
                    }
                });
                return resolve(articles);
            })
            .catch((err) => {
                reject(err);
            });
    });
};