const express=require('express');
const bodyparser = require('body-parser');//exported body-parser
const conenctiondb = require('./database/userdb')//exported database
const users = require('./models/data');//exported user
const script=require('./public/js/regex')
const app=express();
const port = 4000;


app.use(express.static('./public'))
app.set("view engine","ejs")
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use((req, res, next) => {
    next();
})
app.get('/', (req, res) => {
    res.render('index');
    console.log('rendered successfully');
})
//route for posting
app.post('/submit', async (req, res) => {
  const RB=req.body;
if(RB.f.match(script.flc)&&RB.l.match(script.flc)&&RB.e.match(script.E)&&RB.p.match(script.P)&&RB.cp.match(script.CP)&&RB.dob.match(script.DB)){
 await users.create(RB)
 res.send('data saved')
 console.log(RB)
}
else 
{
  res.send('data is corupted')
}
})
  app.listen(port, () => {
    console.log(`listening on ${port}`)
})  
