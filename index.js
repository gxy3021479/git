const express=require('express');
const path=require('path');
const server=express();
server.get('/',(req,res)=>{
    res.send('马宏宇王八蛋'
        // path.resolve()
    );
})
server.listen(80)