const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");


const JWT_SECRET =  process.env.JWT_SECRET;

// ROUTE-1 //create a user - POST - "/api/auth/createuser " - DOES NOT REQUIRE LOGIN
router.post("/createuser", 
[
    // checking input given by the user using express validator
    body("email", "enter a valild email address").isEmail(),
    body("password", "password must be atleast 5 characters").isLength({
        min: 5,
      }),
    body("name", "name must be atleast 2 characters").isLength({ min: 2 }),
    body("college", "college must be atleast 3 characters").isLength({ min: 3 }),
],
async(req,res) => {
    const errors = validationResult(req);

    // if validation fails return errors and do not continue forward
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // search if a user for that email already exists
    User.findOne({email: req.body.email}, async(err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).json({ errors: "internal server error" });
        }
        else
        {
            // if no result found then create a new one
            if(!result)
            {
                // use bcrypt to genrate a hash 
                bcrypt.hash(req.body.password, 10, async function (error, hash) {
                    if(error) 
                    {
                        console.log(error);
                        res.status(400).json({ errors: "internal server error" });
                    }
                    else
                    {
                        // save the user in database
                        let user = await User.create({
                            email: req.body.email,
                            name: req.body.name,
                            college: req.body.college,
                            password: hash,
                          });
              
                        const data = {
                            user: {
                              id: user.id,
                            },
                        };
                        
                        // generating authorization token using jwt and sending it to user
                        const authtoken = jwt.sign(data, JWT_SECRET);

                        res.json({ authtoken });
                    }
                })
            }
            else
            {
                // if a result was found then user already exists and return error
                return res.status(400).json({ error: "Email already in use" });
            }
        }
    });
}
);

// ROUTE-2 //verify a user - POST - "/api/auth/login " - DOES NOT REQUIRE LOGIN
router.post('/login', 
[
     // checking input given by the user using express validator
     body("email", "enter a valild email address").isEmail(),
     body("password", "password must be atleast 5 characters").isLength({
         min: 5,
       }),
],async (req, res) => {
    const errors = validationResult(req);

    // if validation fails return errors and do not continue forward
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else
    {
        // find user with provided email
        User.findOne({email: req.body.email}, async function (err, foundUser) {
            if(err) {
                console.log(err);
                return res.status(400).json({ errors: "internal server error" });
            }
            else
            {
                // if not found any user return error
                if (!foundUser) {
                    return res.status(400).json({ errors: "login with valid credentials" });
                }
                else
                {
                    // if user is found
                    // compare the password provided and the hash stored in our database
                    const result = await bcrypt.compare(req.body.password, foundUser.password);
                    if(result === false) {
                        return res.status(400).json({ errors: "login with valid credentials" });
                    }
                    else if(result === true) 
                    {
                        // if passwords match then give the user an auth token
                        const data = {
                            user: {
                              id: foundUser.id,
                            },
                        };
                        
                        // generating authorization token using jwt and sending it to user
                        const authtoken = jwt.sign(data, JWT_SECRET);

                        res.json({ authtoken });
                    }
                }
            }
        });
    }
});



// ROUTE-3 //get logged in users details - POST - "/api/auth/getuser " -  REQUIRES LOGIN
router.post('/getuser',
// using the fetch user middle ware
fetchuser, async (req, res) => {
    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ errors: "error occoured" });
    }
} );

// ROUTE-4 //get all users details - GET - "/api/auth/getalluser " - DOES NOT REQUIRE LOGIN
router.get('/getalluser', async (req, res) => {
    try{
        const user = await User.find().select("-password");
        res.send(user);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ errors: "error occoured" });
    }
});

module.exports = router;