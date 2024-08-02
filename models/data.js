const mongoose=require('mongoose');
const express=require('express');
const userSchema=new mongoose.Schema({
    f:String,
    l:String,
    e:String,
    p:String,
    cp:String,
    dob:String
})


const users=new mongoose.model('users',userSchema);
if(module.exports=users){
    console.log('collection exported');
}