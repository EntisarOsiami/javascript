   // first lab question:

    let width = 100;
    let height = 100;

    areaOfRectangle = width * height;
    console.log("The area of the rectangle is: " + areaOfRectangle);   

 // second lab question:

    let celsius = 25;
    let fahrenheit = (celsius * 9/5) + 32;

    console.log(celsius + "°C is equal to " + fahrenheit + "°F");

    let fahrenheit2 = 77;
    let celsius2 = (fahrenheit2 - 32) * 5/9;
    console.log(fahrenheit2 + "°F is equal to " + celsius2 + "°C");


    // third lab question:

    let hour = 1;
    const second = 3600;
    let result = hour * second;
    console.log(hour + " hour is equal to " + result + " seconds");


    // fourth lab question:

    let thingOne = `Hello;`;
    let thingTwo = `
    World;`;
    console.log(thingOne + thingTwo);

    // fifth lab question:

let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
console.log("The total is: " + total);


// sixth lab question:

let adjective1 ="amazing";
let adjective2 ="fun";
let adjective3 ="entertaining";

madlib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madlib);

// seventh lab question:

let firstName = "Intisar";
let interest = "coding";
let hobby = "playing video games";

let awesomeMassage=`my name is ${firstName}. I love ${interest} In my spare time, I like to ${hobby}`;
console.log(awesomeMassage);