function onLoad(){
	if (window.innerWidth < 992){
		document.getElementById("row-banner").innerHTML = "";
	}
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

function checkInputsBuy(){
	let email, emailErr, subject, subjectErr, comment, commentErr;
	let regExEmail, name, nameErr, adress, adressErr, zip, zipErr;
	let city, cityErr, country, countryErr;
	
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
	
	//check for input value in adress field
	adress = document.getElementById("adress").value;
	adressErr = document.getElementById("adressError");
	
	if (adress === "" || adress === undefined){
		adressErr.style.display = "block";
		document.getElementById("adress").style.borderColor = "red";
		return false;
	}else{
		adressErr.style.display = "none";
		document.getElementById("adress").style.borderColor = "green";
	}
	
	//check for input value in city field
	zip = document.getElementById("zip").value;
	zipErr = document.getElementById("zipError");
	
	if (zip === "" || zip === undefined){
		zipErr.style.display = "block";
		document.getElementById("zip").style.borderColor = "red";
		return false;
	}else{
		zipErr.style.display = "none";
		document.getElementById("zip").style.borderColor = "green";
	}
	
	city = document.getElementById("city").value;
	cityErr = document.getElementById("cityError");
	
	if (city === "" || city === undefined){
		cityErr.style.display = "block";
		document.getElementById("city").style.borderColor = "red";
		return false;
	}else{
		cityErr.style.display = "none";
		document.getElementById("city").style.borderColor = "green";
	}
	
	country = document.getElementById("country").value;
	countryErr = document.getElementById("countryError");
	
	if (country === "" || country === undefined){
		countryErr.style.display = "block";
		document.getElementById("country").style.borderColor = "red";
		return false;
	}else{
		countryErr.style.display = "none";
		document.getElementById("country").style.borderColor = "green";
	}
	
}