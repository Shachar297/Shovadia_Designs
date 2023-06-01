
const
    cors = require('cors'),
    express = require('express'),
    server = express(),
    port = process.env.PORT || 8442,
    routersManager = require("./routes/routes-manager");

require("dotenv").config();

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use('', routersManager);

server.listen(port, () => console.log('README parser is ready to migrate !\n          Listening at port : ' + port + "         "));