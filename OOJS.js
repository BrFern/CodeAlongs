//Introduction

// var names = ['ryu', 'crystal', 'mario']
// names.length 
// names.sort();
// window
// window.innerWidth
// null //not object

// var name ='mario'
// name.length

// var name2 = new String('ryu')

//Object Literals

// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

//console.log(userOne.name);

//Updating Properties (mostly in console)

//Classes, Class Constructors, Class Methods
//the new keyword creates an empty object, sets the value
//of 'this' to be the new empty object. Calls the constructor
//method.

// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     } 
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }
// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email !=user.email;
//         })
//     }
// }
//adding more funcionality, taking previous functionality into a new one

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
//var admin = new Admin('shaun@ninjas.com', 'shaun');



//var users = [userOne, userTwo, admin];

//admin.deleteUser(userOne);


//console.log(users);

// userOne.login().updateScore().updateScore().logout();
    //Chaining Method


//userOne.login().logout();
//userTwo.logout();



//Prototype Model
// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this.online = false;
//     this.login = function(){
//         console.log(this.email, 'has logged in');
//     }
// }

// User.prototype.login = function(){
//     this.online = true;
//         console.log(this.email, 'has logged in');
    
// }
// User.prototype.logout = function(){
//     this.online = false;
//         console.log(this.email, 'has logged out');
// }
// //trying to inherit users value. Using rest parameters
// //args is capturing the arguments in the array
// //the three dots are turning the arguments into an array
// function Admin(...args){
//     User.apply(this, args); //can also use .call// 
//     this.role = 'super admin'; //role property
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function (u){
//     users = users.filter(user => {
//         return user.email != u.email;
//     })
// }; //prototype chain

// // creating new object, binding the context of this into the new object
// // then passing that concept this, back into the other function
// //prototype is an object

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
// var admin = new Admin('shaun@ninjas.com', 'Shaun');

// var users = [userOne, userTwo, admin];

// console.log(admin);
//inheriting from the User prototype


//console.log(userOne);
//userTwo.login();

//Prototype inheritance (similar to class inheritance-making an admin
//class like previously)

//only adding the admin role in, making sure the prototypes follow 





