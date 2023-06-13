const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Requests = require("../models/Requests");
const Transactions = require("../models/Transactions");
const { body, validationResult } = require("express-validator");


// ROUTE-1 :: make a request - Post - "/api/request/makerequest" - REQUIRES LOGIN
router.post('/makerequest',
 fetchuser,
 [
    body("title", "enter a valid title").not().isEmpty(),
    body("description", "description must be atleast 4 characters").isLength({min: 4}),
    body("offeringAmount", "offering Amount must be greater than zero").optional().isFloat({ min: 0 }),
    body("isRental", "make rental true or false depending on your needs").isBoolean(),
 ],
 async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else
    {
        const newRequest = new Requests({
            requester: req.user.id,
            title: req.body.title,
            description: req.body.description,
            offeringAmount: req.body.offeringAmount,
            isRental: req.body.isRental
        });

        newRequest.save((err, request) => {
            if(err){
                return res.status(500).json({ error: "some error occoured" });
            }
            else{
                return res.json(request);
            }
        });
    }
 });


// ROUTE-2 :: get all request - Post - "/api/request/getrequest" - DOES NOT REQUIRES LOGIN
router.get("/getrequest", async (req, res) => {
    Requests.find({}, async (err, requests) => {
        if(err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
        else
        {
            return res.json(requests);
        }
    })
});

// Route-3 :: request fulfilled - POST - REQUIRES LOGIN
router.put('/markrequest/:id', fetchuser , async (req, res) => {

    try{
        // find the request
        let request = await Requests.findById(req.params.id);
        
        if (!request) {
            return res.status(404).send("Not Found");
        }
        else
        {
            // Allow change only if user owns this request
            if(request.requester.toString() !== req.user.id)
            {
                return res.status(401).send("Not Allowed");
            }
            else if(request.requester.toString() === req.user.id)
            {
                request = await Requests.findByIdAndUpdate(req.params.id , { valid: false });

                res.json({ Success: "Request has been fulfiiled"});
            }
        }
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});


 module.exports = router;   