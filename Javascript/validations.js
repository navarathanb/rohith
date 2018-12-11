function validate()
{
    // alert("Text")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("pwd").value;
    var message = document.getElementById("msg").value;
    var male = document.getElementById("male").checked; //true/false
    var female = document.getElementById("female").checked;
    var crik = document.getElementById("crik").checked; //true/false
    var carm = document.getElementById("carm").checked;
    var state = document.getElementById("state").value;

    if(name.length == 0){
        // alert("please enter name");
        /*
        var obj = document.createElement("img");
        obj.setAttribute("src","error.png");
        document.getElementById("#name").appendChild(obj);
        */
        document.getElementById("error").innerHTML = "Please enter name";
        document.getElementById("name").focus();
        return false;
    }
    if(email.length == 0){
      
        document.getElementById("error").innerHTML = "Please enter email";
        document.getElementById("email").focus();
        return false;
    }
    if(mobile.length != 10){
      
        document.getElementById("error").innerHTML = "Please enter mobile and should be 10 digits";
        document.getElementById("mobile").focus();
        return false;
    }
    if(password.length == 0){
      
        document.getElementById("error").innerHTML = "Please enter password";
        document.getElementById("pwd").focus();
        return false;
    }
    if(message.length == 0){
      
        document.getElementById("error").innerHTML = "Please enter message";
        document.getElementById("msg").focus();
        return false;
    }
    if(male == false && female == false){
        document.getElementById("error").innerHTML = "Please select gender";
        document.getElementById("male").focus();
        return false;
    }
    if(crik == false && carm == false){
        document.getElementById("error").innerHTML = "Please select atleast one hobby";
        document.getElementById("crik").focus();
        return false;
    }
    if(state == 'Select state'){
        document.getElementById("error").innerHTML = "Please select state";
        document.getElementById("state").focus();
        return false;
    }
}