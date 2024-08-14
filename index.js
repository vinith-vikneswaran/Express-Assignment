// const express=require('express');
// const bodyParser=require('body-parser')
// const app=express();
// const port=5000;
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('public'));
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// });
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/success.html')
// });
// app.post('/submit',(req,res)=>
//     {
//         const data=req.body;
//         console.log(data);
//         res.send(__filename+'/success.html') 
//     });



// app.post('/submit',(req,res)=>
// {
//     const data=req.body;
//     console.log(data);
//     res.send("<h1 style='text-align:center;margin-top:5px;'>form submitted succesfully</h1>")
// });



// app.listen(5000, () => {
// 	console.log("Server is running on http://localhost:5000");
// });



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/success', (req, res) => {
    res.sendFile(__dirname + './assignment/success.html');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    console.log(data);
    res.redirect('/success.html');
    // res.sendFile(__dirname + './assignment/success.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
