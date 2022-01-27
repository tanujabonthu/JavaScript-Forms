function passwordrule() {
    //var Pswd = document.getElementById('password').value;
    document.getElementById('div5').innerHTML = "*Password must be atleast 6 chars and one numuric should be there Ex:abc123";
    document.getElementById('div5').style.color = "green";
    document.getElementById('div5').style.fontSize = "small";
     
    //document.getElementById('div2').innerHTML = "";
}
function validateform1() {
    var Uname = document.getElementById('username').value;
   

    if (Uname == "") {
        document.getElementById('div1').innerHTML = "Please Enter UserName";
        document.getElementById('div1').style.color = "red";
        document.getElementById('div1').style.fontSize = "small";

    }
    else if(Uname.length<3){
        document.getElementById('div1').innerHTML = "Please Enter Proper UserName";
        document.getElementById('div1').style.color = "red";
        document.getElementById('div1').style.fontSize = "small";
        console.log("length is small")
        /*document.getElementById('div2').innerHTML = "";
        document.getElementById('div3').innerHTML = "";
        document.getElementById('div4').innerHTML = "";*/

    }
    else{
        document.getElementById('div1').innerHTML = "";
        

    }
}
function validateform2() {
    var Pswd = document.getElementById('password').value;
    
    if(Pswd=="") {
        document.getElementById('div2').innerHTML = "please enter Password";
        document.getElementById('div2').style.color = "red";
        document.getElementById('div2').style.fontSize = "small";
        document.getElementById('div5').innerHTML="";

       
    }
    else if (Pswd.length < 6) {
        document.getElementById('div2').innerHTML = "Password is weak";
        document.getElementById('div2').style.color = "orange";
        document.getElementById('div2').style.fontSize = "small";
        document.getElementById('div5').style.color = "orange";

       
    }
     else {
           
        document.getElementById('div2').innerHTML = "";
        
    }
}
function validateform3() {
    var Pswd = document.getElementById('password').value;
    var Cpswd = document.getElementById('Cpassword').value;
   
    
    if (Pswd == "" ||Pswd != Cpswd ) {
        document.getElementById('div3').innerHTML="please enter correct-password"
        document.getElementById('div3').style.color = "red";
        document.getElementById('div3').style.fontSize = "small";
        
    }
    else {
       
        document.getElementById('div3').innerHTML = "";
    }
}
function validateform4() {
    
    var emails = document.getElementById('email').value;
    if (emails.indexOf("@") > -1) {
        
        document.getElementById('div4').innerHTML = "";
    }
    else {
        document.getElementById('div4').innerHTML = "Pleae enter proper mail";
        document.getElementById('div4').style.color = "red";
        document.getElementById('div4').style.fontSize = "small";
        
    }
}
function finalcheck(){
    var Uname = document.getElementById('username').value;
    var Pswd = document.getElementById('password').value;
    var Cpswd = document.getElementById('Cpassword').value;
    var emails = document.getElementById('email').value;

    if(Uname!=""&&Pswd!=""&&Cpswd!=""&&emails!=""){
     alert("Succesfully registered,please login to continue");
        window.location.href = 'LoginPage.html';
    }
    else if(Uname!=""||Pswd!=""||Cpswd!=""||emails!=""){
        alert("Please check all the fields");
    }
    else{
      alert("Please enter the values");
    }
    
}
function loginform() {
    var user = document.getElementById('text1').value;
    var password = document.getElementById('text2').value;
    if (user != "" && password != "") {
        alert("Welcome to Gentium...!");
    }
}