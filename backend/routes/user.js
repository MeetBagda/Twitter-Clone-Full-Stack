const { MongoClient } = require("mongodb");
const express = require("express")
const router = express.Router();
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
client.connect();
const userCollection = client.db("database").collection("users");

router.post('/create', async (req, res) => {
    try {
        const { username, name, email } = req.body;

        if (!username || !name || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        console.log({ username, name, email })

        const result = await userCollection.insertOne({ username, name, email });

        if (!result.acknowledged) {
            console.log("Error inserting document");
            return res.status(500).json({ message: "Failed to save user" });
        }

        console.log("User saved successfully with _id:", result.insertedId);
        res.status(201).json({
            message: "User saved successfully",
            userId: result.insertedId,
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get("/loggedinuser", async (req, res) => {
    try {
      const email = req.query.email;
      const user = await userCollection.find({ email: email }).toArray();
      res.status(200).json(user);
    } catch (error) {
      console.error("Error getting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

module.exports = router;