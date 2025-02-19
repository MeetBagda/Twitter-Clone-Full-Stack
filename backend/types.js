const z = require("zod");

const userSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 character"),
    fullName: z.string().min(3, "Full name must be at least 3 character"),
    email: z.string().email(),
    password: z.string().min(4, "Password must be at least 4 character"),
});

const getAllUserSchema = z.object({});

module.exports = { userSchema, getAllUserSchema };