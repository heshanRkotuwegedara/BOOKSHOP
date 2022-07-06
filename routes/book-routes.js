const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book")

router.get("/", async(req, res, next) => {
    // This route will provide all of the books
    
});

module.exports = router;
