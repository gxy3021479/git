const express=require('express');
const path=require('path');
const server=express();
server.get('/',(req,res)=>{
    res.send('ok'
        // path.resolve()
    );
})
server.listen(80)