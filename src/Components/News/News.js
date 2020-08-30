import React, { useState, useEffect } from 'react';
import Article from '../Article/Article';
import '../News/New.css'


const News = () => {
    const [single, setsingle] = useState([]);

useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0e248b7c17604ba09a40abcc01901f9e')
    .then(response => response.json())
    .then(data => {
        setsingle(data.articles);
        console.log(data.articles);
    })
    
}, []);
    return (
        <div>
        <h2>Top News: {single.length}</h2>
        <div className="article-main">
        {
             single.map(sn =>  <Article articles = {sn}></Article> )
         }
        </div>
        </div>
    );
};

export default News;