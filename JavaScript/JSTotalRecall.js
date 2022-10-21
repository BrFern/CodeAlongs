//Variables and Datatypes
/* 1. We assign a value to a variable by declaring it using var, const or let.
// 2. We change the value of a variable by declaring a new one and assigning it
// 3. We assign an existing variable to a new variable by typing the variable
then assigning it a new variable
// 4. Declare is creating a new variable, assign is , define is.....
// 5. Pseudocoding is "fake coding", it essentially allows programmers to 
translate between languages. 
    
// 6. You should spend about */

//Strings 

/*const firstVariable = "Hello World!";
firstVariable = 4;
let secondVariable = firstVariable;
secondvariable = "It's almost Friday!";


const myName = "Bailey";
console.log(`Hello my name is ${myName}`); */

/*
//Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);

  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a > d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 === '48'); */

 /* //The Farm
 let animal = "cow";
    if (animal === "cow") {
        console.log("MOOOOOOO!")
    } else  {
        console.log("You're not a cow ya animal!")
    }

    //Driver's Ed
    let age = 18;
        if (age <= 16 ) {
            console.log("Nice try, youngin");
        } else {
            console.log("Congratulations, you're old");
        };
*/
    //Loops
    //A. The Basics
   /* for (let i= 0; i <= 10; i++) {
        console.log(i);
    }

    for (let i = 10; i += 400; i++) {
        console.log(i);
    }

    for (let i=12; i <= 4000; i= i+=3) {
        console.log(i);
    }
*/

//B. Get Even
/*for (let i = 1; i < 100; i++)
    if (i % 0 == 0) {
        console.log(`${i}<--- is an even number`);
    } */

/*//C. Give me Five
for (let i= 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} has both a three and a five`)}
    else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd.`)
    } 
} */

//D. Savings Account
/*let bank_account = 0;
    for  (i =1; i <= 10; i++) {
        bank_account = bank_account + i; 
    }
    console.log(bank_account); */

/*let bank_account2 = 0;
    for (i = 1; i<=100; i++) {
        bank_account2 += i * 2;
    }

    console.log(bank_account2);*/




//III. Arrays and Control Flow
/*A. 1. The items in the arrays are called elements
     2. Arrays do not guarantee they will be in order unless
     you use the .sort() function!
     3. Lists of information are usually the best for array, though you can add almost
     anything your heart desires. 
    
B. Easy Does it */
//let quotes = ["There's a snake in my boot!" , "Yabba Dabba dooo!", "I thought of something funnier than 24. 25."];
/*C. Accessing Elements
1. All arrays are zero indexed, so the best way to access is to 
take the bracket notation and type the number the item is contained within the array. 
*/

/*const randomThings = [ 1, 10, "Hello", true];
    randomThings.pop();
    randomThings.shift();
    randomThings.shift();
    randomThings.push("World");

    console.log(randomThings); */

/* D. Change Values
1. To acccess the thid element you would write ourClass[3]; */

/*const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[3];
ourClass.pop();
ourClass.push("Octocat");
ourClass.push("Cloud City");

console.log(ourClass); */
// E. Mix It Up
/*const myArray = [5, 10, 500, 20];
myArray.push("Aegon")
myArray.shift(5)
myArray.unshift("Bob Marley")
myArray.pop()
Array.prototype.reverse() //It kept the changes, mutate means changes, the reverse method 
//if prototype is removed, it did change the order 
console.log(myArray); */

// F. Biggie Smalls
/*
const myNum = 7;
    if (myNum < 100) {
          console.log(`Your number, ${myNum} is less than 100.`)
    } else if (myNum > 100) {
        console.log(`Your number, ${myNum} is more than 100.`)
    } */

// G. Monkey in the Middle
   /* const myNum = 7;
     if(myNum < 5) {
        console.log(`Little number`)
     }
     else if (myNum > 10) {
        console.log(`Big number`)
     }
     else {
        console.log(`Monkey`)
     } */
// H. What's in your Closet?
/*const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
  kristynsCloset[6]="raybans";
  kristynsCloset[5] = "stained knit hat";

  console.log(kristynsCloset)
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log(`Thom is rocking those ${thomsCloset[0][1]} today!`);
  console.log(`Thom is rocking those ${thomsCloset[1][2]} today!`);
  console.log(`Thom is rocking those ${thomsCloset[2][1]} today!`);
  console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]} today!`)
  thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset) */

//IV Functions
//A
/*let name = "Captain Reynolds"
function printCool(name){
    console.log(`${name} is cool`)
} */

//B
/*function calculateCube(num){
    console.log(num ** 3);
}
calculateCube(5); */

//C
const vowel = ["a", "e", "i", "o", "u"];
function isVowel() {
    if (isVowel === vowel[""]) {
        return true
    }
    else if (isVowel() !== vowel[""]) {
        return false
    }
}
console.log(isVowel("e"))

//D
/*function getTwoLengths(string1, string2) {
    if string1 = "Hank" {
        
    }
}

//E
//F
//G
//H
*/
// Objects

/*
let user = {
    name: "Henry the Brave",
    email: "henryDaBravest@yahoo.com",
    age: 61,
    purchased: []
    
}
//console.log(user);
user.email = "henrydaves@yahoo.com"
//console.log(user.email)
user.age++ 
//console.log(user.age)
user["location"] = "the Forest Moon of Endor"
//console.log(user.location)
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodphurs")
//console.log(user.purchased[2])

user.friend = {
    name: "Wubwub the slug",
    age: 500000,
    location: "Mordor",
    purchased: []
}
//console.log(user.friend.name)
//console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
//console.log(user.friend.purchased[1])

for (let i = user.purchased.length; i <= 3; i += 1) {
    console.log(`${user.name} has bought ${user.purchased}`);
}

for (let i = user.friend.purchased.length; i <= 3; i += 1) {
    console.log(`${user.friend.name} has bought ${user.friend.purchased}`);
}


function updateUser() {
   user.age ++
}
console.log(user.age)

user.name.toUpperCase() */

//Get support with part G and functions


 







