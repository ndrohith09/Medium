// Set
localStorage.greet = "Hi!"; // Same as: window.localStorage.setItem("greet", "Hi!");
// Get
localStorage.greet; // Same as: window.localStorage.getItem("greet");
// Remove item
delete localStorage.greet; // Same as: window.localStorage.removeItem("greet");

// Clear storage
localStorage.clear();

Example:
// Store values (Strings, Numbers)
localStorage.hello = "Hello";
localStorage.year = 2017;
// Store complex data (Objects, Arrays)
var user = {name:"Rohith", surname:"ND", books:["A","B"]};
localStorage.user = JSON.stringify( user );
// Important: Numbers are stored as String
console.log( typeof localStorage.year ); // String
// Retrieve values
var someYear = localStorage.year; // "2017"
// Retrieve complex data
var userData = JSON.parse( localStorage.user );
var userName = userData.name; // "Rohith"
// Remove specific data
delete localStorage.year;
// Clear (delete) all stored data
localStorage.clear();