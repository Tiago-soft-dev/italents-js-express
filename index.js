const express = require("express");
const server = express();
const request = require("request");

const port = 3000;
server.use(express.json());
server.listen(port, ()=> {
    console.log(`Servidor online em http://localhost:${port}`);
    })

server.get("/", (req, res) => {
        const url = req.body.url;

        request(url, function(error, response, body){
            console.log('statusCode:', response && response.statusCode);
        });


    })