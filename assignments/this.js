/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window binding
* 2. Implicit binding 
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

/*
This will default to window/global binding if there is no implicit or explicit context.
*/
// code example for Window Binding

function aaaa() {
    console.log(this);
}

// Principle 2

/*
Implicit binding happens whenever this is used inside an object without the call/bind or constructor functions. Usually with dot notation.
*/

// code example for Implicit Binding
const mobject = {
    name: "doug",
    speak: function(name) {
       return console.log(`${this.name} or ${name}`)
    }
}

mobject.speak('rick');

/* this.name refers to 'doug' while name refers to the function argument */

// Principle 3

// code example for New Binding

function NewSomething(name) {
    this.name = 'Its Gold Jerry',
    this.greeting = name;
    this.speak = function() {
        return console.log(`${this.greeting} or ${this.name}`)
    }
}

const aaa = new NewSomething('doug');
const bbb = new NewSomething('larry');

/* 'doug' points to this.greeting while this.name points to 'it's gold jerry', the name is the function argument and is being passed to this.greeting while this.name is an object key with a value of 'its gold jerry'*/

// Principle 4

aaa.speak.call(bbb);
bbb.speak.apply(aaa);


/*
Explicit binding allows us to override the doug portion of the object.


*/
// code example for Explicit Binding