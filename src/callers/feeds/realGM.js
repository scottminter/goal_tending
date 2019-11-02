import BProm from 'bluebird';
import moment from 'moment';
import _ from 'lodash';
import {feed} from '../../constants';

const getRealGMFeed = () => {
  const URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbasketball.realgm.com%2Frss%2Fwiretap%2F0%2F0.xml&api_key=${feed.RSS_TO_JSON_KEY}`;
  return new BProm((resolve, reject) => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        const items = data.items;
        const tags = getTagList(_.get(data, 'feed.description'));
        const articles = [];
        items.forEach((article) => {
          articles.push({
            guid: _.get(article, 'guid'),
            author: _.get(article, 'author'),
            link: _.get(article, 'link'),
            thumbnail: _.get(article, 'thumbnail'),
            title: _.get(article, 'title'),
            pubDate: _.get(article, 'pubDate'),
            formattedPubDate: moment(_.get(article, 'pubDate')).format(feed.MOMENT_FORMAT),
            content: _.get(article, 'content'),
            categories: tags,
            source: 'Real GM',
          });
        });
        resolve(articles);
      })
      .catch(err => {
        reject(err);
      })
  })
};

const getTagList = (tags) => {
  return tags.split(', ');
};

export default getRealGMFeed;
