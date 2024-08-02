let submit = document.querySelector(".submit");
let lum= document.querySelector("#lum");
let lpd= document.querySelector("#lpd");
let lcpd= document.querySelector("#lcpd");
let ldb= document.querySelector("#ldb");
let db = document.querySelector("#db");
let cpd= document.querySelector("#cpd");
let pd= document.querySelector("#pd");
let um= document.querySelector("#um");
let msg=document.querySelector("#msg");
let msg1=document.querySelector("#msg1");

let cpandkp=/(qwerty|asdf|love|zxcv|12345|abcdef|password|123456|123456789|admin|letmein|monkey|football|access|master|welcome|login|passw0rd|abc123)/i
//no=name,birth,username,phonenumber,repeat,sequencing,userinformation,commonwords;
let userName=/[A-Za-z]{9,12}|[A-Za-z]{5,7}\s*[A-Za-z]{5,8}|(\w{13})/
let nam=/[A-za-z]{6,7}/
let year=/\d{2}\d{2}/
//DD/MM/YYYY,MM/DD/YYYY,YYYY,DD,MM
let dob=/\b(\d{2}\d{2}\d{2}|(0[0-9]|1[0-2])[/](0[0-9]|(12[0-9]|3[0-1])[/]\d{4})\b/



//password verification....
let passwordmatching=() =>
  {
    if(cpd.value===pd.value)
      {
        msg1.style.animation="paused"
        msg1.innerHTML="correct password";
        msg1.style.color="#32cd32";
        cpd.style.border=" 2px solid #32cd32";
        cpd.setAttribute=("disabled","disabled");
      }
   else if ( (cpd.value && pd.value!=="") )
    { 
      msg1.style.animation="pulse  ease-in-out 1s infinite  both";
        msg1.innerHTML="wrong password";
        cpd.style.border=" 2px solid red";  
   }
   else 
   {
    if(cpd.value!==0 )
    msg1.innerHTML="";
    cpd.style.border="none";

   }
  }

cpd.addEventListener("input", () => {
  passwordmatching();

})
// checking password vulnerability... 
let creatingstrongpass = () => 
  {  
 if(pd.value.match(nam))
  {
    msg.innerHTML="username cant set as password";
  }
  else if(pd.value.match(dob))
    {
      msg.innerHTML="Dates are often easy to guess.";
    }
    else if(pd.value.match(year))
      {
        msg.innerHTML="Recent years are easy to guess.";
      }

  }
 pd.addEventListener("input", () => {
 creatingstrongpass();
  })
pd.addEventListener("keyup",()=>{
  if(pd.value.length===0)
    {
  msg.style.animation="paused"
  msg.innerHTML="";
    }
})

// let pswchk=()=>{
// if(psw.value ==="" && vpsw.value==="" )

//   {

//   msg.innerHTML="password can't be empty";
//   msg.style.color="yellow";

// }
// else if (psw.value!=="" && vpsw.value==="")
//   {
//    vpsw.setAttribute=("required","required");
// }                
// else{
//   alert("Everything is ok,please submit your details fast");


// }
// }
// submit.addEventListener("click",()=>{
//   pswchk();
// })

// let showpsw=()=>{
//   if(psw.type="password")
//     {
//       psw.type="text";
//     }
//     else
//     {
//       psw.type="password";
//     }
// }
// showpass.addEventListener("click",()=>{
//   showpsw();
// })
// let ifpassstrong= () => {

//   if (psw.value.match(/[A-Z]/)) {
//     if (psw.value.match(/[a-z]/)) {
//       if (psw.value.match(/[0-9]/)) {
//         if (psw.value.match(/[@,#,$,^,*]/)) {
//           pass1.style.color = "#228B22";
//           pass1.style.opacity = "100";
//           pass1.style.animation = "paused";
//           alertforvalidpass.innerHTML ='<p style="text-align:center"></p>';
//           alertforvalidpass.innerContent="STRONG PASSWORD CREATED";
//           alertforvalidpass.style.color = "#32cd32";
//           alertforvalidpass.style.border = "6px solid #228B22";

//         }
//         else {

//           alertforvalidpass.innerContent = "ERASING.........";
//           alertforvalidpass.style.color = "#32cd32";
//           alertforvalidpass.style.border = "6px solid red";
//         }
//       }
//     }
//   }

  // else if(psw.value==="")
  //   {
      // passwordvalidation();
    
  
  //   else 
  //   {
  //     // alertforvalidpass.innerHTML = '<p class="msg" id="Username"></p>';
  //     alertforvalidpass.innerHTML="password removed";
  //     alertforvalidpass.style.color="red";
  //     alertforvalidpass.style.border="3px solid red";

  // }


// let checkusername=()=>{
//   if(usermail.value.match(/[A-Za-z]+/))
//     {
//       username.innerHTML="username is available";
//       um.style.animation="paused";
//   um.innerHTML="username";
//       um.style.color="#32cd32";

//     }
//     // else if(usermail.value.match(/[A-Za-z0-9]+/))

//     //   {
//     //     username.innerHTML="follow the patter given above !";
//     //   }
//     else
//     {
//       username.innerHTML="username is not availabe";
//       username.style.color="red";
//     }
// }

// let passwordiscreating=()=>{
   
//   if(psw.value.length)
//     {
//      alertforvalidpass.innerContent="password is in creating proccess";
//      alertforvalidpass.animation="flicker 2s ease-in-out infinite both";
//   }
// if else()



