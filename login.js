const http = require('http');
const fs = require('fs');


const user = require('./users.json');

const posts = require('./posts.json');

const PORT = 8000;

function readItems() {
  try {
    if (!fs.existsSync(user)) return [];
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}


const server = http.createServer((req, res)=>{

   
// Login endpoint

if(req.method ==='POST' && req.url === '/login'){
    let body = ''

    req.on('data', (chunk)=>{
        body += chunk.toString()
    })

    req.on('end', ()=>{
        statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        const {email, password} = JSON.parse(body)

        const check = readItems()

        const foundUser = check.find(u => u.email === email && u.password === password)

        if(foundUser){
            res.end(JSON.stringify({message: 'Login successful', user: foundUser}))
        } else{
            res.statusCode = 401
            res.end(JSON.stringify({message: 'Invalid credentials'}))
        }
    })
}
 
})



//  Posts endpoint

    // if(req.method === 'GET' && req.url === '/posts'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.end(JSON.stringify({posts: []}));
    // }



server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})