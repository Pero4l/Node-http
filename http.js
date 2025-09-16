const http = require('http');

const user = require('./users.json');

const PORT = 8000;

const server = http.createServer((req, res)=>{

    if(req.method === 'POST' && req.url === '/register'){
        let body = '';

        req.on('data', (chunk)=>{
            body += chunk.toString();
        })

        req.on('end', ()=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            user.push(JSON.parse(body));
            console.log(user);

            res.end(JSON.stringify({message: 'User registered successfully', data: JSON.parse(body)}));
        })
    }else if (req.method === 'GET' && req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the Blog API');
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    } 
})


if(req.method ==='POST' && req.url === '/login'){
    let body = ''

    req.on('data', (chunk)=>{{
        
    }})
}

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})