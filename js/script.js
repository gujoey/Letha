function onLoad(){
	/*if (window.innerWidth <= 768){
		document.getElementById("imageIndex").src = "../images/photos/brogues-large.jpg";
	}*/
}


function checkInputs(){
	let email, emailErr, subject, subjectErr, comment, commentErr;
	let regExEmail, name, nameErr;
	
	//check for input value in name field
	name = document.getElementById("name").value;
	nameErr = document.getElementById("nameError");
	
	if (name === "" || name === undefined){
		nameErr.style.display = "block";
		document.getElementById("name").style.borderColor = "red";
		return false;
	}else{
		nameErr.style.display = "none";
		document.getElementById("name").style.borderColor = "green";
	}
	
	//check for valid input value in email field
	regExEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
	email = document.getElementById("email").value;
	emailErr = document.getElementById("emailError");
	
	if (!regExEmail.test(email)){
		emailErr.style.display = "block";
		document.getElementById("email").style.borderColor = "red";
		return false;
	}else{
		emailErr.style.display = "none";
		document.getElementById("email").style.borderColor = "green";
	}
	
	//check for input value in subject field
	subject = document.getElementById("subject").value;
	subjectErr = document.getElementById("subjectError");
	
	if (subject === "" || subject === undefined){
		subjectErr.style.display = "block";
		document.getElementById("subject").style.borderColor = "red";
		return false;
	}else{
		subjectErr.style.display = "none";
		document.getElementById("subject").style.borderColor = "green";
	}
	
	//check for input value in comment field
	comment = document.getElementById("comment").value;
	commentErr = document.getElementById("commentError");
	
	if (comment === "" || comment === undefined){
		commentErr.style.display = "block";
		document.getElementById("comment").style.borderColor = "red";
		return false;
	}else{
		commentErr.style.display = "none";
		document.getElementById("comment").style.borderColor = "green";
	}
}