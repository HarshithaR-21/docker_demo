const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Docker jenkins CI/CD Pipeline Example');
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});