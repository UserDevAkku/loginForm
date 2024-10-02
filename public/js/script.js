
let submit = document.querySelector(".sbt");
let db = document.querySelector("#db");
let cpd= document.querySelector("#cpd");
let pd= document.querySelector("#pd");
let um= document.querySelector("#um");
let msg=document.querySelector("#msg");
let msg3=document.querySelector(".msg3");
let showpwd=document.querySelector("#checkbox");
let open=document.querySelector("#open");
let close=document.querySelector("#close");
let form=document.querySelector("#form");
let uf=document.querySelector("#uf");
let ul=document.querySelector("#ul");
let msg2=document.querySelector("#msg2");
let msg1=document.querySelector("#msg1");
let msg4=document.querySelector("#msg4");
let UN=document.querySelectorAll(".un");
//let a=6,b=7 if (a===b
//PASSWORD
let commonPWD=/\b(aaaaaa|qwerty|asdf|love|zxcv|123456|abcdefgh|password|1234567|1234567890|admin|letmein|monkey|football|access|master|welcome|login|passw0rd|abc123)\b/i
let strongPWD=/([A-Z]{1,2}[a-z]{10,13}\W{1,}\d{1,})/
let normalPWD=/\b(\d{4}[A-Za-z]{10,16})|([A-Za-z]{1,3}\d{3,4})|([A-Za-z}]{8,10}\W{1,4})\b/
let weakPWD=/\b[a-z]{4,15}[0-9]{1,4}\b/
let repeatedCHAR= /(\w)\1{1,}/                                                  
let repeatedCHARS=/\b(\w\w)\1{1,}\b/
let sequence=/(\w{1,})\1{2,9}/
let userINFO=/\b[a-z]{10,13}[-_.]{1,2}\d{1,4}\b/
let namE=/\b[A-Z]*[a-z]{5,6}\b/
let DOB=/\b(\d{2}[\-/]\d{2}[\-/](19|20)\d{2})|((19|20)\d{2}[\-/]\d{2}[\-/]\d{2})\b/
let YEAR=/\b([a-zA-Z]*(19|20)\d{2})|((19|20)\d{2})\b/
let PHNno=/^[+]*[0-9]{1,3}\d{10}$/
//USERNAMEs
let correctname=/\b[A-Z]{1}[a-z]{4,10}\b/
let Ftooshort=/\b[A-Z]{1}[a-z]{2}\b/
let Ltooshort=/\b[A-Z]{1}[a-z]{2}\b/
let FnC=/\b[a-z]{1,}\b/
let lnC=/\b[a-z]{1,}\b/
let Fnum=/\b[0-9@#$]{1,5}\b/
let Lnum=/\b[0-9@#$]{1,5}\b/
let fdig=/^[a-z]{6}[\W]{1,2}$/
//email
let email=/^[\w_.+-]{20,40}[@][a-z]{4,20}[.][a-z.]{3,20}$/
let demail=/^[0-9]{5,8}[@]$/
let repeatchar=/^(\w)\1{2,}$/
let addspecdigit=/^[a-z]{8,14}[@]$ | /
let EFc=/^[A-Z]{1}$/ 
let plzremC=/^[a-z]{1,12}[@]$/
let digitremov=/^[0-9@._-]$/
let Eshort=/^[\w.+_-]{14,19}[@]$/
let invalidEmail =/^[a-z]{7,30}[@][a-z]{3,6}[.][a-z]{3,6}$/
//dob
let validdob=/\b(\d{2}[\/.-]\d{2}[\/.-](19|20)\d{2})|((19|20)\d{2}[\/.-]\d{2}[\/.-]\d{2})\b/
let invaliddob=/\b(\d{4})\b/
let invalidentries=/^[A-Za-z\W]{1,15}$/
//passsword matching
let passwordmatching=()=>{
  if(pd.value.length!==0){
  if(cpd.value===pd.value && cpd.value.length===pd.value.length )
    {
      msg.innerHTML="correct password";
      msg.style.color="blue";
      msg.style.animation="flicker 1s ease-in infinite"
    }
    else if( cpd.value!=="" && cpd.value!==pd.value )
       {
      msg.innerHTML="wrong password"
      msg.style.animation="paused"
    }
    else {
msg.innerHTML=""
    }
  }
   
}
cpd.addEventListener("input", () => {
  if(cpd.value===0 && cpd.value.length===0 && pd.value.length===0)
    {
      cpd.style.border="none"
    }

  passwordmatching();
})
cpd.addEventListener("keyup",()=>{
  if( cpd.value.length!==pd.value.length && cpd.value===pd.value)
    {
      cpd.style.border="none";
      msg.innerHTML="  "
    }
})
// checking password vulnerability... 
let creatingstrongpass = () => 
  {  
    if(pd.value.match(strongPWD))
      {
        msg.innerHTML="strong password"
        msg.style.animation="flicker 1s ease-in-out infinite alternative"
        msg.style.color="blue"
      }
else if(pd.value.match(repeatedCHAR))
{
msg.innerHTML='Too easy to guess "aaa"'
}
 else if(pd.value.match(repeatedCHARS))
  {
    msg.innerHTML='To easy to guess "abab"'
  }
    else if(pd.value.match(DOB))
      {
        msg.innerHTML='do not use your birthday'
      }
      else if(pd.value.match(sequence))
        {
      msg.innerHTML='consequtive sequence is easy to guess.'
        }
        else if(pd.value.match(commonPWD))
          {
          msg.innerHTML='The most commonly used password'
          }
          else if(pd.value.match(YEAR))
            {
              msg.innerHTML='Recent years are easy to guess'
            } 
              else if(pd.value.match(normalPWD))
                {
msg.innerHTML='Reliably strong password.'
}      
else if(pd.value.match(weakPWD))
  {
msg.innerHTML='This is a weak password.'
}
  else if(pd.value.match(userINFO))
    {
    msg.innerHTML='Usernames are so easy to guess.'
    }
    else if(pd.value.match(PHNno))
      {
        msg.innerHTML="Phonenumber is not allowed to guess"
      }
      else if(pd.value.match(namE))
        {
          msg.innerHTML="Names are easy to guess"
        }
    else 
    {
      if(pd.value===""){
        msg.style.border="none"
      }
      msg.innerHTML="Choosen password can be a strong password ."
       msg.style.animation="flicker 1s ease-in-out infinite alternative"
       msg.style.color="red"
    }
}
 pd.addEventListener("input", () => {
  if(pd.value.length>18)
    {
    msg.innerHTML="😂FOLLOW THIS SEQUENCE A-Za-z?3";
    
    }
 creatingstrongpass();
  })
pd.addEventListener("keyup",()=>{
  if(pd.value.length===0)
    {
  msg.style.animation="paused"
  msg.innerHTML="";
  
    }
})
//username check
let checkusername=()=>{
        if(uf.value.match(FnC) || ul.value.match(lnC))
      {
        msg2.innerHTML='First letter must be capital*'
        msg2.style.color='red';
      }
           
  else if (uf.value.match(Fnum) || ul.value.match(Lnum))
  {
    msg2.innerHTML="Please do not use any special character or digit*"
    msg2.style.color="red"
  }
  else if(uf.value.match(Ftooshort)){
msg2.innerHTML="first name is too short*"
msg2.style.color="red"
  }
  else if(ul.value.match(Ltooshort)){
msg2.innerHTML="last name is too short*"
msg2.style.color="red"
  }
  else if(uf.value.length>8 || ul.value.length>8)
    {
      msg2.innerHTML="choosen Name is an valid name"
    }
    else if(uf.value.match(fdig) || ul.value.match(fdig))
      {
      msg2.innerHTML="digits or special char is not allowed*"
      msg2.style.color="red"
      }
      else if(uf.value.match(correctname) && ul.value.match(correctname))
        {
          msg2.innerHTML="fullname is saved in database"
        }
        else if(uf.value.match(correctname) && ul.value.match(correctname)===false )
          {
            msg2.innerHTML="fullname will not save in database"
          }
          else if(uf.value.match(correctname))
            {
              msg2.innerHTML="exactly use this pattern in lastname also"
            }
        
  else
  {
    msg2.innerHTML=""
  }
}
UN.forEach((un) => {
  un.addEventListener("keyup",()=>{
    checkusername();
    
  })
});
//email
let emailcheck=()=>{
 if(um.value.match(email)){
msg3.innerHTML="Email addresss is available"
msg3.style.animation="flicker 1s ease-in infinite"
msg3.style.color="blue";
  }
else if(um.value.match(demail)){
  msg3.innerHTML="atleast add some characters before '@' "
  msg3.style.color="red"
    }
    else if(um.value.match(repeatchar)){
msg3.innerHTML="repeated characters are not allowed"
msg3.style.color="red"
    }
    else if(um.value.match(addspecdigit)){
      msg3.innerHTML="E-mail must contains atleast a '.'or digit*"
      msg3.style.color="red"
    }
    else if(um.value.match(EFc)){
      msg3.innerHTML="First character must be small letter"
      msg3.style.color="red"
    }
    else if(um.value.match(plzremC))
      {
        msg3.innerHTML="atleast add some digits and special letter*"
      msg3.style.color="red"
      }
    else if(um.value.match(digitremov))
      {
      msg3.innerHTML="first character can't be any digit or special character*"
      msg3.style.color="red"
    }
    else if(um.value.match(Eshort)){
msg3.innerHTML="E-mail is too short or an invalid E-mail*"
msg3.style.color="red"
    }
      else if (um.value.match(invalidEmail))
        {
        msg3.innerHTML="This is an invalid Email !"
        msg3.style.color="red";
      }
    
  else {
    msg3.style.animation="paused"
   msg3.innerHTML=""
    
  }
}
um.addEventListener("input",()=>{
  emailcheck();
 if(um.value==="") 
  {
    msg3.innerHTML=""
  }
})
//msgs for required field
let pswchk=()=>{
if(uf.value===""&& ul.value==="" )
  {
   
     msg2.innerHTML="username is required*"
    
  }
  if(ul.value!=="" && uf.value==="")
    {
      msg2.innerHTML="first name is required*"
      
    }
    if(uf.value!=="" && ul.value==="")
      {
        msg2.innerHTML="last name is required*"
        
      }

if (um.value==="" )
  {
   
    msg3.innerHTML="E-mail is required*"
   
}
if (pd.value==="")
  {
   
    msg.innerHTML='password is required*'
   
}                
if ( pd.value!=="" && cpd.value==="" ){
 msg1 .innerHTML='confirm password is required*'
}
if(db.value==="")
{
  msg4.innerHTML='date of birth is required*'
}
}
submit.addEventListener("click",()=>{
  pswchk();
  console.log("clicked");
})
let checkdob=()=>{
  if(db.value.match(validdob))
    {
      msg4.innerHTML="This is a valid Date of birth"
      msg4.style.color="blue"
 msg4.style.animation="pulse 1s ease-in-out infinite"
    }
    else if(db.value.match(invaliddob)){
      msg4.innerHTML="Year format is not supported*"
      msg4.style.color="red"
    }
    else if(db.value.match(invalidentries)){
      msg4.innerHTML="it looks like username or E-mail ☻*"
msg4.style.color='red'
    }
  
}
db.addEventListener("input",()=>{
  checkdob();
  if(db.value===""){
    msg4.innerHTML=""
  }
})

//show and hide 
let showpsw=()=>{
  if(pd.type==="password")
    {
     pd.type="text"
  
    }
   else
    {
      pd.type="password"
    }
  
}
showpwd.addEventListener("click",()=>{
  showpsw();
})