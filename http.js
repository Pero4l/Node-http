const http = require("http");

const file = './data.json'

http.createServer((req, res) => {

    let statusCode = 200;
    let response = "";
    // let contentType = "text/plain"

    if(req.url == "/"){
        
        contentType = "text/html"

        response = "<h1>Landing page</h1>"

    }else if(req.url == "register"){
        const {name, email, password} = req.body

        const user = {
            name: name,
            email: email,
            password: password
        }


    }else{
        statusCode = 404;

        contentType = "application/json"

        response = JSON.stringify({
            status: "failed",
            code: 404,
            message: "Page not found"
        })
    }

    // res.writeHead(200, {
    //     'content-type': 'text/plain',
    //     'connection': 'keep-alive'
    // });

    res.end(response)
    
}).listen(5000, () => {
    console.log("Server is up!!");
    
})