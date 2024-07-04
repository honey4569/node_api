const pokemon = require ("pokemon");

const http = require("http");
const PORT = 8000;
const hostname = "localhost";
const server= http.createServer((req, res)=> {

    if(req.url === "/"){
        return res.end ("Hi Home pg");
    }

    if (req.url==="/Working"){
        return res.end("Working pg");
    }
    res.end("End pg");
});

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
})