
const submit = document.querySelector('.btn');
const firstName = document.querySelector('.one');
const secondName= document.querySelector('.two');
const button= document.querySelector(".button");


   

submit.addEventListener('click',start);
button.addEventListener('click', refresh);



function refresh (){
    location.reload();
}




function start(progressBar,number){
    if(firstName.value == '' || secondName.value==''){
        progressBar.preventDefault();
        document.querySelector('.number').textContent="Enter names";
        setTimeout(function(){
            document.querySelector('.number').textContent="";

        },500) ;
    }
   else{    
   progressBar.preventDefault();
    var number;
    if(firstName.value == "ada" && secondName.value=="blendi" ||
       firstName.value == "blendi" && secondName.value=="ada" ||
       firstName.value == "Ada" && secondName.value=="Blendi" ||
       firstName.value == "Blendi" && secondName.value=="Ada" ||
       firstName.value == "ada" && secondName.value=="Blendi" ||
       firstName.value == "Blendi" && secondName.value=="ada" ||
       firstName.value == "Ada" && secondName.value=="blendi" ||
       firstName.value == "Blendi" && secondName.value=="ada"
      ){
        number = 100;
    }
    else if(firstName.value == "esti" && secondName.value=="blendi" ||
    firstName.value == "blendi" && secondName.value=="esti" ||
    firstName.value == "Esti" && secondName.value=="Blendi" ||
    firstName.value == "Blendi" && secondName.value=="Esti" ||
    firstName.value == "esti" && secondName.value=="Blendi" ||
    firstName.value == "Blendi" && secondName.value=="esti" ||
    firstName.value == "Esti" && secondName.value=="blendi" ||
    firstName.value == "Blendi" && secondName.value=="esti") {
        number = 69;
        
    }
    else number = Math.round(Math.random()*100);
   document.getElementById("bar").style.width = `${number}%`;
   setTimeout( function (){
    document.querySelector('.number').textContent=`${number}%`;

   },2500)
   
}
   }
 












