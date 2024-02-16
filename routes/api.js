const router = require('express').Router();
const { app } = require('apico/server.js');
/** Declare routes for Router */

/// Route
/// api/
router.get('/', async( req, res )=>{
    res.json({"message": "APi works"});
});



router.get('/mynae', async( req, res )=>{
    res.json({"name": "mohamad"});
});



/// Prefix
app.use( '/api', router );


/// students/all