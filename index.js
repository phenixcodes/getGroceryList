var userName = prompt("Choose a username:");
var passWord = prompt("Choose a password:")
var numberOfGroceries = parseInt(prompt("How many items are on your grocery list?")); 

var validateInput = isInputValid(numberOfGroceries);
var validateUser = isUserNameValid(userName);

class userProfile {
    constructor(userName, passWord, groceryList) {
        this.userName = userName;
        this.passWord = passWord;
        this.groceryList = groceryList;
    }
}

function isInputValid(numberOfGroceries){
    var validInput = numberOfGroceries;

    if ((typeof validInput) === "number" && validInput < 15 ){
        return true;
    }
    else if (validInput > 15){
	console.log("Grocery list cannot be longer than 15 items. Try Again.");
        return false;
	}
	else{
	console.log("Invalid Input. Try Again.");
        return false;
    }
}

function isUserNameValid(userName){
    var validName = userName;
    
    if (!(validName === "" && validName === " ")){
        return userName;
    }
    else{
        console.log("You must create a username. Please Try again.");
        return false;
    }
}

function createGroceryList(numberOfGroceries) {
    var i = 0;
	var groceryList = [];

	while (i < numberOfGroceries){
	var groceryItem = prompt("Enter a grocery item:");

	if ((typeof groceryItem) === "string" && groceryItem != ""){
		groceryList.push(groceryItem);
		i++;
	}
	else{
		return(groceryItem + " is not a valid input.");
	}
    }
    return groceryList;
}

function printGroceryList(userName, groceryList){
    var counter = 1;

    console.log("\nHowdy, " + userName + " ! :)");
    console.log("Here's your grocery list !");
            
    //will print every index of the array in a list format
	groceryList.forEach(function(index){

        console.log(counter + '. ' + index);
        counter++;

    });
    
    console.log();
	console.log("Don't forget your list at home! Happy shopping! \n");
    
    return groceryList;
}

if(validateInput === true && validateUser != false){
    groceryList = createGroceryList(numberOfGroceries);
    
    if(createGroceryList != undefined){
        var completedGroceryList = printGroceryList(userName, groceryList);
        var createUser = new userProfile(userName, passWord, groceryList);

        // this is a test case. This will print out the user profile
        console.log(createUser);
    }
}
else{
    console.log("You've entered unreadable data. Access denied.")
}
