
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burgers", {
					  burger_name: {
					    type: DataTypes.STRING,
					    allowNull:false
					  },
					  devoured: {
					    type: DataTypes.BOOLEAN,
					    defaultValue: false
					  },
					  date: {
					    type: DataTypes.DATE,
					    defaultValue: sequelize.literal('NOW()')
					  }
					}, {
					  timestamps: true
					});


		Burger.associate = function(models) {
	    // We're saying that a Post should belong to an Author
	    // A Post can't be created without an Author due to the foreign key constraint
	    console.log("MODELS ==== ",models);
	    Burger.belongsTo(models.Customer, {
	      foreignKey: {
	        allowNull: true
	      }
	    });
	  };



	return Burger;
};

	// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Book" model that matches up with DB


// // Syncs with DB
// burger.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = burger;
