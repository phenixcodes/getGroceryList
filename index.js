
//taking in the user input and saving them into an object
var userName = prompt("What's your username?");
var passWord = prompt("What's the password?");
//asking user how many items are on their grocery list to create an array of that size
var userInput = parseInt(prompt("How many grocery items are on your list?"));
//saves grocery list items to a variable named groceryList
var groceryList = groceryKey(userName,userInput);

//the groceryKey function validates if each grocery item is correct and saves the data to an array called groceryList
function groceryKey(userName,userInput){
//making the userInput accessible to all functions
var getList = userInput;

//will exit the program if given an empty or null string
if (userName != "" && userName !=" "){

    //if input is valid with username and less than 15 items
	if ((typeof getList) == "number" && getList < 15){

        //initializing the variables
		var i = 0;
		var listAmount = getList;
		var newUser = new Array();

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

            console.log("\n" + "Howdy, " + userName + "!" + "\n");
            console.log("Here's your grocery list !");
            
            //looping through the array newUser to read each entry item to the user in list format
			newUser.forEach(function(entry){

                console.log(counter + ". " + entry);
                counter++;

            });
            //this reads on a new line
            console.log();
		    console.log("Don't forget your list at home! Happy shopping!");
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
    
return newUser;

}

function createUser(userName,passWord,groceryList){

    var keyChain = {
        "userName" : userName,
        "passWord" : passWord,
        "groceryList" : groceryList,
    }
    return keyChain;

}

var keyChain = createUser(userName, passWord, groceryList);

/* this is a test to check what items are stored in the object keyChain
console.log(keyChain);*/