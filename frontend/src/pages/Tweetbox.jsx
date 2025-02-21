import React, { useState } from 'react';
import { Avatar } from "@mui/material";
import { Photo as ImageIcon } from '@mui/icons-material';
import { useUserAuth } from "../context/userAuthContext";
import axios from 'axios';

const Tweetbox = ({onPostCreated}) => {
    const [tweetMessage, setTweetMessage] = useState("");
    const { user } = useUserAuth();
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false); // Track image upload loading
    const [error, setError] = useState(''); // Track image upload errors

    const handleTweetChange = (event) => {
        setTweetMessage(event.target.value);
    };

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        if (!image) return;

        // Validate file type and size
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (!validTypes.includes(image.type)) {
            setError("Invalid file type. Please upload a JPEG, PNG, or GIF.");
            return;
        }

        const maxSize = 2 * 1024 * 1024; // 2MB limit
        if (image.size > maxSize) {
            setError("File size exceeds 2MB limit.");
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        try {
            setLoading(true);
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=332f217f82e44dde7ca4d24e846dd8e8`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data && response.data.success) {
                setImageURL(response.data.data.url);
                setError("");
            } else {
                console.error("ImgBB upload failed:", response.data);
                setError("Image upload failed. Please try again.");
            }
        } catch (uploadError) {
            console.error("Image upload failed:", uploadError.response ? uploadError.response.data : uploadError);
            setError("Image upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handlePost = async () => {
        try {
            await fetch("http://localhost:8585/api/v1/post/createpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid: user.uid,
                    name: user.displayName,
                    username: user.email.split('@')[0],
                    email: user.email,
                    profilePhoto: user.photoURL,
                    post: tweetMessage,
                    photo: imageURL
                })
            });
            setTweetMessage("");
            setImageURL('');
            if (onPostCreated) {
                 onPostCreated(); // Trigger refresh in Feed
            }
        } catch (err) {
            console.log(err);
        }
    };
    const isDisabled = !(tweetMessage || imageURL)
    return (
        <div className="border rounded-md p-4 bg-white shadow-sm mb-4">
            <div className="flex items-start space-x-2 mb-2">
                <Avatar
                    src={user?.photoURL}
                    alt="user"
                    className="w-10 h-10 object-cover rounded-full"
                />
                <div className="w-full">
                    <textarea
                        placeholder="What is happening?!"
                        value={tweetMessage}
                        onChange={handleTweetChange}
                        className="w-full p-2 border-none rounded-md bg-gray-50 resize-none focus:outline-none"
                        rows="2"
                    />
                    <div className="flex items-center justify-between mt-2">
                        <label htmlFor="image" className="imageIcon">
                            <ImageIcon className="cursor-pointer text-blue-400"/>
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <button
                            onClick={handlePost}
                            className={`bg-blue-500 text-white rounded-full w-20 h-10 font-bold hover:bg-blue-700 ${loading ? "disabled:opacity-50 disabled:cursor-not-allowed" : ""}`}
                            disabled={isDisabled || loading}
            >
              {loading ? "Posting..." : "Post"}
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Tweetbox;