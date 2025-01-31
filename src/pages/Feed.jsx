import React, {useState} from 'react';
import Tweetbox from "./Tweetbox";
import Posts from "./Posts";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: "1",
            name: "Jane Doe",
            username: "jane_doe",
            profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s",
            post: "Exploring the new features in JavaScript! #coding #javascript",
             photo: "https://images.unsplash.com/photo-1531297487003-8014041694e9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: "2",
            name: "John Smith",
            username: "johnsmith",
             profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s",
            post: "Just finished a great workout session! #fitness #health"
        },
        {
            id: "3",
            name: "Alice Johnson",
             username: "alicejohnson",
            profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s",
            post: "Loving the new features in CSS! #webdevelopment #design",
            photo: "https://images.unsplash.com/photo-1612223459441-c5d1006e467b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]);

    return (
        <div className="flex flex-col  p-8">
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>Home</h1>

            <Tweetbox/>
        {posts.map((post) => (
               <Posts key={post.id} {...post}/>
            ))}
        </div>
    );
};

export default Feed;