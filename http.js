const http = require('http');
const url = require('url');

const file = './users.json'

const {method, req} = require("node:http");


http.createServer((req, res) => {

    let statusCode = 200;
    let response = "";
    // let contentType = "text/plain"

    if(req.url == "/"){
        
        contentType = "text/html"

        response = "<h1>Landing page</h1>"

    }else if(url == "/register" && method == "POST"){
        const {name, email, password} = req.body

        contentType = "application/json"

        if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "Name, Email and Password is required"
        })
    }

        const user = {
            name: name,
            email: email,
            password: password
        }

        file.push(user)

        console.log(file);

        response = JSON.stringify({
            status: "success",
            code: 201,
            message: "User registered successfully",
            user: user
        })
        

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
    
}).listen(7000, () => {
    console.log("Server is up!!");
    
})