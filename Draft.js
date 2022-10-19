class Governor  {
    constructor (name, age, personality) {
    this.name = name,
    this.age = age,
    this.personality = personality}
    thankCitizens = function() {
        console.log ("Thank you random citizen!")
    }
    dontUnderstand = function () {
        console.log("I'll look into it.")
    }
    kissesBabies = function() {
        console.log("This baby is tots adorabs")
    }
}

const gov1 = new Governor ('John', '57', 'warm');
gov1.kissesBabies();

class Person {
    constructor (name, age, eyeColor) {
        this.name = name,
        this.age = age,
        this.eyeColor = eyeColor }
    sayHello = function() {
        console.log("Hello!")
        } 
    askStatus = function() {
        console.log("How are you?")
        } 
    respond = function() {
        console.log("I'm good! And you?")
        }
}

class PostalWorker extends Person {
        deliverMail = function() {
            console.log("Here is your mail.")
        }
        petThePuppies = function() {
            console.log("What a cute dog you have!")
        }
        noPostOnSundays = function() {
            console.log("Remember, no post on Sundays!")
        }
    }

class Chef extends Person {
    tasteSauce = function() {
        console.log("Mmmm! Exquisite!")
    }
    lovesFood = function() {
        console.log("I don't like food, I love it!")
    }
    chefsKiss = function () {
        console.log("This dish is...mwah!")
    }
}



const pers1 = new Person ('Bailey', 29, 'hazel');
const pers2 = new Person ('Josh', 29, 'hazel');
const post1 = new PostalWorker ('Jan', 64, 'blue');
const chef1 = new Chef ('Alberto', 43, 'brown')

chef1.lovesFood();
pers1.askStatus();
pers2.respond ();
post1.petThePuppies();

const people = [pers1, pers2, post1, chef1, gov1];
