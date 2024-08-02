const mongoose=require('mongoose');

const connectiondb=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connection establshed');
}).catch((error)=>{
    console.log('connection is not established');
})

if(module.exports=connectiondb){
    console.log('database exported')
}