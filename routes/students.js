const router = require('express').Router();
const { app } = require('apico/server.js');
/** Declare routes for Router */

/// Route
/// students/all
router.get('/all', async( req, res )=>{
    res.json({"message": "APi works"});
});





/// Prefix
app.use( '/students', router );