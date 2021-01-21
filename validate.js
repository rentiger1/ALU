function validateForm() {
    var x = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment_box = document.getElementById("message").value;
    var element = document.getElementById("success_submit");
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (x == "") {
    	alert("Name must be filled out");
    	document.getElementById('name').style.borderColor = "red";
        return false;
    }
     else if (email == "" || !pattern.test(email)) {
    	alert("You have entered an invalid email!");
    	document.getElementById('email').style.borderColor = "red";
    	return false;
    } else if (comment_box === ''){
    	alert("You need to send a message!");
    	document.getElementById("message_area").style.borderColor = "red";
    	return false;
    }
    	else {
    		element.classList.add("alert-success");
    		element.innerText += "Thank you for your message!";
    }
    return true;
}
