
//Validation for Activating The Submit Button

function activateSubmit() 
{

	if(document.getElementById("acceptCondition").checked == true)
	{
		document.getElementById("button").disabled = false;
		
	}
	else 
	{
		document.getElementById("button").disabled = true;
	}
}

// Validation for Checking all the conditions


function validate()
 {
	var count=0;
	// First name Validation
	if(document.getElementById("firstName").value.trim() == "")
	{
		count=1;
		document.getElementById("firstName-error").innerHTML = "First name missing";
	} 
	// lastName Validation
	if(document.getElementById("lastName").value.trim() == "") 
	{
		count=1;
		document.getElementById("lastName-error").innerHTML = "Last name missing";
	}
	// Password Verification
	if(document.getElementById("password").value.length < 8 )
	{
		count=1;
		document.getElementById("password-error").innerHTML = "Set password";
	}
	// Matching The Password and Confirm Password
	if(document.getElementById("password").value != document.getElementById("confirmPassword").value) 
	{
		count=1;
		document.getElementById("confirm-error").innerHTML = "Password mismatch";
	}
	// Selecting the States
	if(document.getElementById("state").value == "Select State" || document.getElementById("city").value == "Select City" ) 
	{
		count=1;
		document.getElementById("state-error").innerHTML = "Select state and city";
	}
	// Checking the Conditions if user created or not
	if(count==0)
	{
		document.getElementById("myForm").submit();
		alert("USER CREATED SUCCESSFULLY");
	}
}

// function to fill The cities

function createCity() 
{
	var m = new Map();
	var value1 = ["Jaipur","Udaipur","Kota","Ajmer"];
	var value2 = ["Bareilly","Kanpur","Lucknow","Mathura"]
	m.set("Rajasthan",value1);
	m.set("UP",value2);
	var stateObject = document.getElementById("state").value;
	var cityObject = document.getElementById("city");
	switch(stateObject) 
	{
		case "Rajasthan" :
			var value = m.get("Rajasthan");
			var options = "<option>" + value[0] + "</option>" + "<option> "+ value[1] + "</option>" + "<option>" + value[2] + "</option>" + "<option>" + value[3] + "</option>";
			cityObject.innerHTML = options;
			break;
		case "UP" :
			var value = m.get("UP");
			var options = "<option>" + value[0] + "</option>" + "<option> "+ value[1] + "</option>" + "<option>" + value[2] + "</option>" + "<option>" + value[3] + "</option>";
			cityObject.innerHTML = options;
			break;
	}

	
