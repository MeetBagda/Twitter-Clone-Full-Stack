const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);
client.connect();

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process if unable to connect
    }
}

connectToDatabase();

const postCollection = client.db("database").collection("posts");

// Create a new post
router.post("/createpost", async (req, res) => {
    const post = req.body;

    // Basic validation
    if (!post.uid || !post.name || !post.post) {
        return res.status(400).send({ message: "Missing required fields" });
    }

    try {
        const result = await postCollection.insertOne(post);
        res.status(201).send({ message: "Post created successfully", postId: result.insertedId });
    } catch (error) {
        console.error("Error inserting post:", error);
        res.status(500).send({ message: "Failed to create post" });
    }
});

// Get all posts
router.get("/post", async (req, res) => {
    try {
        const posts = await postCollection.find().toArray();
        res.send(posts.reverse());
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({ message: "Failed to fetch posts" });
    }
});

// Get posts by user email
router.get("/userpost", async (req, res) => {
    const email = req.query.email;

    if (!email) {
        return res.status(400).send({ message: "Email query parameter is required" });
    }

    try {
        const posts = await postCollection.find({ email }).toArray();
        res.send(posts.reverse());
    } catch (error) {
        console.error("Error fetching user posts:", error);
        res.status(500).send({ message: "Failed to fetch user posts" });
    }
});

module.exports = router;