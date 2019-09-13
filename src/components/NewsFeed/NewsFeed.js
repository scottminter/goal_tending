import React from 'react';
import HoopsHype from './HoopsHype/HoopsHype';
// import axios from 'axios';

/**
 * Use https://rss2json.com/ to transform your feed into JSON
 */
const NewsFeed = (props) => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    // const HOOP_HYPE_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhoopshype.com%2Ffeed%2F';
    // useEffect(() => {
    //     console.log('this is called');
    //     axios.get(CORS_PROXY + HOOP_HYPE_URL)
    //         .then((resp) => {
    //             console.log(resp.data);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // });

    return (
        <div>
            <h2>News Feed</h2>
            <HoopsHype corsProxy={CORS_PROXY} />
        </div>
    );
};

export default NewsFeed;
