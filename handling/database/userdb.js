const mongoose=require('mongoose');

const connectiondb=mongoose.connect('mongodb://localhost:27017/dbs').then(()=>{
    console.log('connection establshed');
}).catch((error)=>{
    console.log('connection is not established');
})

if(module.exports=connectiondb){
    console.log('database exported')
}