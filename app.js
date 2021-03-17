const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World!')
})

// function get(rota, funcao){
//     const req = {router: '/'};
//     let res = {};
//     funcao(req, res);
//     console.log(res);
// }

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:`, port)
})