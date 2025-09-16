const http = require('http');

const user = require('./users.json');

const PORT = 8000;

const server = http.createServer((req, res)=>{

    // Registration endpoint

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

// Login endpoint

if(req.method ==='POST' && req.url === '/login'){
    let body = ''

    req.on('data', (chunk)=>{
        body += chunk.toString()
    })

    req.on('end', ()=>{
        statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        const {username, password} = JSON.parse(body)
        const foundUser = user.find(u => u.username === username && u.password === password)

        if(foundUser){
            res.end(JSON.stringify({message: 'Login successful', user: foundUser}))
        } else{
            res.statusCode = 401
            res.end(JSON.stringify({message: 'Invalid credentials'}))
        }
    })
}

//  Posts endpoint

    if(req.method === 'GET' && req.url === '/posts'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({posts: []}));
    }



server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})