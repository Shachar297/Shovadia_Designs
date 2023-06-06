const
    express = require('express'),
    router = express.Router(),
    apiHandler = require("../src/API");

router.post("/mail/", apiHandler.handleMailbox);

router.post("/", apiHandler.handleDatabaseRequest)

router.get("/" , (req, res) => {
    res.json({status: 200, body: 'Listening.'})
});

router.get("/admin/users/total/", apiHandler.handleAdminRequest)
router.get("/admin/", apiHandler.handleAdminRequest);
router.get("/admin/roles/", apiHandler.handleAdminRequest);

module.exports = router;