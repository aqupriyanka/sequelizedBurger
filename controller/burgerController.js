var express = require("express");

var router = express.Router();

// var burger = require("../models/burgers.js");

var db = require("../models");



//ON PAGE LOAD
router.get("/",function(req,res){

	var burgers = [];
	var devouredBurger = [];


	db.Burgers.findAll({
		include: [db.Customer]
	}).then(function(data){

		if(data){
			for(var burger in data){
				// console.log("burger in for loop :",data[burger]);

				if(data[burger].devoured){
					devouredBurger.push(data[burger]);
				} else{
					burgers.push(data[burger]);
				}
			}
		}
		res.render("burger",{"burgers":burgers, "deBurgers" : devouredBurger});
	});


});


//POST method to store data in db
router.post("/",function(req,res){

	//insert data in burger table
	//render("/")
	console.log("NAME === ",req.body.name);
	console.log("BODY === ",req.body);

	// burger.create(req.body.name,function(data){
	// });

	db.Burgers.create({
		burger_name: req.body.name
	}).then(function(data){
		res.redirect("/");

	});

});


//PUT to update data in db.
router.put("/:name",function(req,res){
	console.log("inside old route");
	var name = req.params.name;
	console.log("inside put ",name);

	//Update burger table and devoured as false.
	//render("/")
	// burger.update(name,function(data){
	// });

	db.Burgers.update({
			devoured: true
		},
		{
		where:{
			burger_name:name
		}
	}).then(function(data){
		res.redirect("/");

	});

});

//PUT to update data in db.
router.put("/:custName/:name",function(req,res){
	console.log("inside new route method --",req.params.custName);
	var name = req.params.name;
	console.log("inside put ",name);

	//Update burger table and devoured as false.
	//render("/")
	// burger.update(name,function(data){
	// });
	db.Customer.create({
		name:req.params.custName
	}).then(function(data){

		// console.log("DATA IN CUSTOMER =========== ",data[0].id);
		console.log("DATA IN CUSTOMER =========== ",data.id);

			db.Burgers.update({
					devoured: true,
					CustomerId: data.id
				},
				{
				where:{
					burger_name:name
				}
			}).then(function(data){
				res.redirect("/");

			});
	});

	

});


router.delete("/:name",function(req,res){
	var name = req.params.name;
	console.log("inside delete ",name);

	//Update burger table and devoured as false.
	//render("/")
	// burger.delete(name,function(data){
	// });

	db.Burgers.destroy({
		where:{
			burger_name: name
		}
	}).then(function(data){
		res.redirect("/");
	});

});

module.exports = router;

