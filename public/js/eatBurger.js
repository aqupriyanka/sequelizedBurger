var burgerMenu = $("#all-burgers .panel-body form button");

if(burgerMenu.length == 0){
	$("#no-items").show();
}


var deBurgerMenu = $("#devouredBurgers .panel-body form button");

if(deBurgerMenu.length == 0){
	$("#no-deitems").show();
}

$("#all-burgers .panel-body form button").on("click",function(e){
	e.preventDefault();
	
	console.log("FORM ACTION == ",$("#all-burgers .panel-body form").attr("action"));
	var userName = prompt("Please enter your name");
	console.log("username == ",userName);

	if(userName == "" || userName == " " || userName == null || userName == undefined){
		alert("Please enter the Customer Name who is going to eat this burger.");
		return;
	}

	var formAction = $("#all-burgers .panel-body form").attr("action");
	var newFormAction = "/"+userName+formAction;
	$("#all-burgers .panel-body form").attr("action",newFormAction);
	$("#all-burgers .panel-body form").submit();
});

$("#submit").on("click",function(e){
	// e.preventDefault();
	if($("#comment").val() == "" || $("#comment").val() == " " || $("#comment").val() == null || $("#comment").val() == undefined){
		alert("Please enter the burger name");
		return;
	}

	// alert($("#burgerForm").attr("action"));
	console.log("burgerForm submit action :: ",$("#burgerForm").attr("action"));
	$("#burgerForm").submit();
})