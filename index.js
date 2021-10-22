const express = require ('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); 
const port = 5000;
 
app.get('/' , (req, res) =>{
    res.send('Hello hello gello form my second node server hello mello')
})

// app.get('/users', (req, res) =>{
//     res.send('Here is my users')
// })

const users = [
    {id:0, name:'shabana', email: 'shabana@gmail.com'},
 
    {id:1, name:'shabnur', email: 'shabana@gmail.com'},
 
    {id:2, name:'srabonti', email: 'shabana@gmail.com'},
 
    {id:3, name:'sonia', email: 'shabana@gmail.com'},
]
 
// app.get('/users', (req, res) =>{
//     res.send(users)
// })

app.get('/users', (req, res) =>{
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
   
})

// app. METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push (newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})



 
app.listen(port, () =>{
    console.log('Listening to port' , port);
})
