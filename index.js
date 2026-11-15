const { clear } = require('console');
const http = require('http');
const url = require('url');

//app object
const app={};

//configuration
app.config={
    port:3000
};
// create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req,res)=>{
    // request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace( /^\/+|\/+$/g,'');
    const method  = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    console.log(headerObject);

    res.end('Hello world');
    
};

app.createServer();

