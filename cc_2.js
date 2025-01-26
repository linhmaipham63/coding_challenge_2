//Task 1: Working with Arrays
let products = ["Banh mi","Pho","Bun cha","Bun bo Hue","Bun rieu","Com tam"];
products.unshift("Banh cuon");
products.pop();
console.log(products);

//Task 2: Accessing and Modifying Arrays
let scores = [1,2,3,4,5];
scores[1] = 6;
let average = scores.reduce((sum,score) => sum+score,0)/scores.length;
console.log(`Updated array: ${scores} - Average score: ${average}`);

//Task 3: Working with Objects
//Submission: Commit your changes to GitHub with the message: "Task 3 - Employee Records."
let employee = {
    name: "Linh Pham",
    age: 19,
    department: "Finance",
    isActive: true
};
employee.department = "HR";
employee.position = "HR Assistant";
console.log(employee);
