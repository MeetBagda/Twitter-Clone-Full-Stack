const express = require("express");
const router = express.Router();
const { userSchema } = require("../types");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const zod = require('zod');
const { authMiddleware } = require("../middleware");
const cors = require('cors');

router.use(cors());

router.post("/signup", async (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = userSchema.safeParse(createPayLoad);

    if (!parsedPayLoad.success) {
        return res.status(411).json({
            msg: "Invalid input",
            errors: parsedPayLoad.error.issues,
        });
    }

    try {
        const user = await User.create({
            username: createPayLoad.username,
            fullName: createPayLoad.fullName,
            email: createPayLoad.email,
            password: createPayLoad.password,
        });

        const userId = user._id;

        const token = jwt.sign(
            { userId: userId },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send the userId with the token
        res.status(201).json({
            msg: "User created successfully",
            token: token,
            userId: userId
        });
    } catch (error) {
        console.error("Error during User creation:", error);
        if (error.code === 11000) {
            const key = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ msg: `${key} already registered` });
        }
        res.status(500).json({
            msg: "Error creating user",
            error: error.message,
        });
    }
});

const signinBody = zod.object({
    email: zod.string().email("Invalid email address"),
    password: zod.string()
});

router.post("/signin", async (req, res) => {
    const { success, error } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            msg: "Invalid input",
            errors: error.errors,
        });
    }

    try {
      const user = await User.findOne({ email: req.body.email });

        if (!user) {
          return res.status(401).json({ msg: "Incorrect email or password" });
        }

        if (req.body.password !== user.password) {
          return res.status(401).json({ msg: "Incorrect email or password" });
        }
        const userId = user._id
         const token = jwt.sign(
            { userId: userId },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token: token,
            userId: userId,
        });
    } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({
            msg: "Failed to sign in",
            error: error.message,
        });
    }
});

router.get("/users", async (req, res) => {
    try {
      const users = await User.find({}, "_id username email"); 
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ msg: "Error fetching users", error: error.message });
    }
  });