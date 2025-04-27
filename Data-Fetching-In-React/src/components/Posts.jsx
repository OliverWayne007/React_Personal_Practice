import React , { useEffect, useState } from 'react';

import Post from './Post';

export default function Posts()
{
    const [posts , setPosts] = useState([]);

    const fetchPosts = async (url) => {
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setPosts(responseJson);
    }

    useEffect( () => {
        fetchPosts("https://jsonplaceholder.typicode.com/posts");
    } , [] )

    return (
        <>
        { posts.map( (post) => {
            return <Post {...post} key = {post.id} />
        } ) }
        </>
    )
}