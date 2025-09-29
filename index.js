 /**
 * Scenario: You have a business that is widely popular throughout the globe. You have announced your website launch on social media and the only way to check
 * your e-store is to sign up. Your store will open in 10 minutes and 100k users are waiting to register.
 * 
 * Goal
 * - Pinpoint the possible issues with this /register route
 */

// const { error } = require("console");
const express = require("express");
const rateLimit = require("express-rate-limit");
const {Pool} = require("pg");
const app = express();

app.use(express.json());

// Assume this variable is the database container
// let users = [];

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"estore",
    port:5432,
})

const limiter = rateLimit({
    windowMs:60*1000,
    max:100,
})

app.use("/regiter", limiter);

// After registering in the client, it should go to this route
app.post("/register", async (req, res) => {
  const { email } = req.body;
  const existingUser = users.find((u) => u.email === email);

  if (!existingUser) {
    return res.status(400).json({error:"Email is required"});
    // return res.status(400).send("User already exists!");
  }

  try{
    const res = await pool.query('INSER INTO users {email} VALUES {$1} ON CONFLICT {email} DO NOTING RETURNING *', [email]);
    if(res.rowCount.length == 0){
        return res.status(400).json({error:"User already exists"});
    }
    res.json({message:"User created successfully!"});
  }catch(err){
    console.error("Registration error", err);
    res.status(500).json({error:"Something went wrong"});
  }

  // Intentionally added timeout to simulate DB slowdowns due to multiple registrations at once
  setTimeout(() => {
    users.push({ email });
    res.send(`User ${email} created!`);
  }, 100);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

