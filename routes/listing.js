const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})

router.route("/")
//Index routes
.get(wrapAsync(listingController.index))
//create routes
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createListing)); 

//new routes
router.get("/new", isLoggedIn ,wrapAsync(listingController.renderNewForm));

router.route("/:id")
//show routes
.get(wrapAsync(listingController.showListing))
//update routes
.put(isLoggedIn,isOwner, upload.single("listing[image]"),validateListing ,wrapAsync(listingController.updateListing))
//delete routes
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));


//edit routes
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.EditListing));


module.exports = router;