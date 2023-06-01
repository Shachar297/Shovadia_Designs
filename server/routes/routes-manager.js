const
    express = require('express'),
    router = express.Router(),
    apiHandler = require("../src/API");

router.post("/mail/", apiHandler.handleMailbox);

router.get("/" , (req, res) => {
    res.json({status: 200, body: 'Listening.'})
})
module.exports = router;