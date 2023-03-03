
//taking in the user's responses and saving them into an array
function userData(userName,userInput){
    //making the userInput accessible to all functions
    var getList = userInput;

    //will exit the program if given an empty or null string
    if (userName != "" && userName !=" "){
        
    //if input is valid with username and less than 15 items
	if ((typeof getList) == "number" && getList < 15){
        
        //initializing the variables
		var i = 0;
		var listAmount = getList;
		var newUser = new Array(userName,"grocery list");
        
        //add as many list items as needed
		while (i < listAmount){
				var listItem = prompt("Enter a grocery item:");
            
                //check that it's a valid string
				if ((typeof listItem) === "string" && listItem != ""){ 
					newUser.push(listItem);
					i++;
				}
                    
                //exit loop upon invalid string
				else{
					return "'" + listItem + "'" + " is not a valid input. Try again";
				}
		}
        //making sure the list is completed before printing the user's data
		if (i === listAmount){
            var counter = 1;
            
			newUser.forEach(function(entry){
                switch (entry) {
                case userName : console.log("\n" + "Howdy, " + entry + "!" + "\n");
                    break;
                case "grocery list" : console.log("Here's your " + entry + " !");
                    break;
                default: console.log(counter + ". " + entry);
                    counter++;
                    break;
			    }
            });
		    return "\n" + "Don't forget your list at home! Happy shopping!";
		}
	}
    //If too many items, then exit
	else if (getList > 15){
		return "Grocery list cannot be longer than 15 items. Try Again.";
	}
    //invalid input exits the function
	else{
		return "Invalid Input. Try Again.";
	}
}
    //userName will be the tokent to pull user data later on         
    else{
        return "You must create a username. Please Try again. "
    }
}
//calling for user input as parameters

console.log(userData(prompt("Enter a username:"),parseInt(prompt("How many grocery items are on your list?"))));