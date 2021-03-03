import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState ([]);
    useEffect ( () => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=8a0c198a46ef4dc5b33eaf28e42d2de1'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;