// test 1
let Status = "Alive";
console.log("Is Status = 'Alive'? my priction is true");
console.log(Status=="Alive"? true : false);


// test 2
let typeScriptCompleted = true;
console.log("Is typescript = 'completed'? my priction is True");
console.log(typeScriptCompleted? true : false);


// test 3
let nextJS = " ";
console.log("Is NextJS = 'started'? my priction is false");
console.log(nextJS=="Alive"? true : false);


// test 4
let ranndomNumber = (Math.random()*100).toFixed();
console.log("Is ", ranndomNumber , " > 50? my priction is true");
console.log(ranndomNumber > "50"? true : false);


// test 5
let ranndomNumber1 = 60
console.log(`Is ${ranndomNumber} > 50? my priction is true`);
console.log(ranndomNumber > "50"? true : false);


// test 6
let tasteOfFood = ["Excellent","Good"];
tasteOfFood.forEach((taste) => {taste === "Excellent"? 
                    console.log("Chef is good"): 
                    console.log("Chef need to improve his skills")});


//test 7
let car = 'subaru';
console.log("Is car == 'cultus'? I predict false.")
console.log(car == 'cultus')


//test 8
let matritalStatus = 'Single';
console.log("Is Marital Status == 'Single'? I predict true.")
console.log(matritalStatus == 'Single')


//test 9
let test = "cricket";
console.log("Is test == 'Cricket'? I predict false.")
console.log(test == 'Cricket');


//test 10
/* let num = 4;
console.log("Is num == '4'? I predict false.");
console.log(num === '4'); */


//test 11
let userstring = "ABDULLAH";
console.log("Is userString == 'abdullah'? I predict false.")
console.log(userstring === userstring.toLowerCase())


//test 12
let ranndomNumber2 = (Math.random()*100).toFixed();
console.log("Is ", ranndomNumber2 , " < 50 && > 20? Cannot predict");
console.log(((ranndomNumber2 < "50") && (ranndomNumber2 > "20"))? true : false);


//test 13
/* let ranndomNumber3: number | string = 50;
console.log("Is ", ranndomNumber3 , " = 50? Cannot predict");
console.log(((ranndomNumber3 === "50") || (ranndomNumber3 === 50))? true : false);

 */
//test 14
let userIn = "Abdullah";
let checkList =  ['abdullah','Ali','faraz','asim','haris','arsalan','fahad','']
let Isavailable = false;
for (let i of checkList) {
    if (userIn === i){
        Isavailable = true;
        break;
    }
    else{
        continue;
    }
}
console.log("Is Abdullah present in list ",Isavailable);



//test 15
let userIn1 = "Abdullah";
let checkList1 =  ['abdullah','Ali','faraz','asim','haris','arsalan','fahad','']
let Isavailable1 = false;
for (let i of checkList1) {
    if (userIn1 != i){
        Isavailable1 = true;
        break;
    }
    else{
        continue;
    }
}
console.log("Is Abdullah absent in list ",Isavailable1);
