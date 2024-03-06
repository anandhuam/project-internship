function check(){
    var name1=document.getElementById("name1");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var msg=document.getElementById("msg");

    if(name1.value==""){
        alert("Please Enter Your Name");
        return false;
    }
    if(email.value==""){
        alert("Please Enter Your Email-Id");
        return false;
      
    }
    if(phone.value==""){
        alert("Please Enter Your Phone Number");
        return false;
      
    }
    if(msg.value==""){
        alert("Please Enter Your Message");
        return false;
       
    }
    else
        alert("Successfull");
        return true;
    
   

 
  
}
