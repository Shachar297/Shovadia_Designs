const
    express = require('express'),
    router = express.Router(),
    apiHandler = require("../src/API");

router.post("/mail/", apiHandler.handleMailbox);

module.exports = router;