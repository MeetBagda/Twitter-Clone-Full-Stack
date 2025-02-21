import React, { useState, useEffect } from 'react';
import Tweetbox from "./Tweetbox";
import Posts from "./Posts";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
   const [refreshFeed, setRefreshFeed] = useState(false);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:8585/api/v1/post/post");
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setError("Failed to load posts. Please try again later.");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [refreshFeed]);

     const handlePostCreated = () => {
        setRefreshFeed(prev => !prev);
    };

    return (
        <div className="flex flex-col p-8">
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>Home</h1>
            <Tweetbox onPostCreated={handlePostCreated} />
            {error && <p className="text-red-500">{error}</p>}
            {posts.map((post) => (
                <Posts key={post._id} {...post}/>
            ))}
        </div>
    );
};

export default Feed;