import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './HoopsHype.module.css';

const HoopsHype = (props) => {
    const [author, setAuthor] = useState(null);
    const [content, setContent] = useState(null);
    const [guid, setGuid] = useState(null);
    const [link, setLink] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState(null);
    const [pubDate, setPubDate] = useState(null);
    const [hideContent, setHideContent] = useState(true);
    const URL = 'http://localhost:3002/feed';

    useEffect(() => {
        axios.get(URL)
            .then((resp) => {
                if (resp.data.length > 0) {
                    const data = resp.data[0];
                    setAuthor(data.author);
                    setContent(data.content);
                    setGuid(data.guid);
                    setLink(data.link);
                    setThumbnail(data.thumbnail);
                    setTitle(data.title);
                    setPubDate(data.pubDate);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [props.corsProxy, author]);

    const showContentClickHandler = () => {
        if (hideContent) {
            setHideContent(false);
        } else {
            setHideContent(true);
        }
    };

    return (
        <div id={guid} className={style.HoopsHype}>
            <div>
                <img src={thumbnail} alt='thumbnail for article'></img>
                <b>{title}</b>
                <br />
                {pubDate}
            </div>
            <div>{author}</div>
            <div><a href={link} target='blank'>{title}</a></div>
            <button onClick={showContentClickHandler}>Read More...</button>
            <div hidden={hideContent}>{content}</div>
        </div>
    );
};

export default HoopsHype;