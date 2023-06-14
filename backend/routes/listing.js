const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Products = require("../models/Products");
const Users = require("../models/Users");
const Transactions = require("../models/Transactions");
const { body, validationResult } = require("express-validator");


// ROUTE-1 :: get all listings - Post - "/api/listing/getlistings" - DOES NOT REQUIRES LOGIN
router.get("/getlistings", async (req, res) => {
    Products.find({}, async (err, listings) => {
        if(err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
        else
        {
            return res.json(listings);
        }
    })
});


// ROUTE-2 :: add a listing - Post - "/api/listing/addlisting" - REQUIRES LOGIN
router.post('/addlisting',
    fetchuser, // middlware
    [
        // using express validator
        body("title", "enter a valid title").not().isEmpty(),
        body("description", "description must be atleast 4 characters").isLength({min: 4}),
        body("price", "offering Amount must be greater than zero").isFloat({ min: 0 }),
        body("isRental", "make rental true or false depending on your listing").isBoolean()
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else
        {
            const newProduct = new Products({
                title: req.body.title,
                description : req.body.description,
                price: req.body.price,
                availability: true,
                seller: req.user.id,
                category: req.body.category,
                isRental: req.body.isRental,
                imageURL: req.body.imageURL
            });

            newProduct.save((err, product) => {
                if(err)
                {
                    return res.status(500).json({ error: "some error occoured" });
                }
                else{
                    return res.json(product);
                }
            });
        }
    }
);


// Route-3 :: mark product as sold  - PUT - "/api/listing/addlisting" - REQUIRES LOGIN
router.put('/marklisting/:id', fetchuser , async (req, res) => {

    try{
        // find the request
        let product = await Products.findById(req.params.id);
        
        if (!product) {
            return res.status(404).send("Not Found");
        }
        else
        {
            // Allow change only if user owns this request
            if(product.seller.toString() !== req.user.id)
            {
                return res.status(401).send("Not Allowed");
            }
            else if(product.seller.toString() === req.user.id)
            {
                product = await Products.findByIdAndUpdate(req.params.id , { availability: false });

                res.json({ Success: "Product has been sold or rented successfully"});
            }
        }
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;