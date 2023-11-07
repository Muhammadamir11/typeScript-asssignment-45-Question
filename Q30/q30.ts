let userNames = ['admin','ali','salman','hasseb','faisal']
/* userNames.forEach(element => {
    element === "admin"? 
    console.log(`Hello ${element}, would you like to see a status report`):
    console.log(`Hello ${element}, thank you for logging in again`);      
}); */


for (const i of userNames) {
    if (i == 'admin'){
        console.log(`Hello ${i}, would you like to see a status report`);
    }
    else{
        console.log(`Hello ${i}, thank you for logging in again`);     
    }
}