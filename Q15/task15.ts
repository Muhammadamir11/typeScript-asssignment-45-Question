let listOfguest = ['Abdullah','Umair','Sajid','Ahsan'];
for (let i=0; i<listOfguest.length; i++){
    console.log(`Hi ${listOfguest[i]}, you are cordialy invited for dinner`);
}
// Umair is busy and will not come
console.log(`${listOfguest[1]} is busy and will not come`);

//Adding new member to the invitation list
let listOfguestUpdated = listOfguest.splice(1,1,"Taha");

//new invitation greetings to updated list of guests
for (let i=0; i<listOfguest.length; i++){
    console.log(`Hi ${listOfguest[i]}, you are cordialy invited for dinner`);
}
