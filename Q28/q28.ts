function stageOfLife(Age:string){
    let age = Number(Age);
    if(age < 2){
        console.log("Person is a baby");
    }
    else if(age == 2 && age < 4){
        console.log("Person is toddler");
    }
    else if(age == 4 && age < 13){
        console.log("Person is Kid");
    }
    else if(age == 13 && age < 20){
        console.log("Person is teenager");
    }
    else if(age == 20 && age < 65){
        console.log("Person is adult");
    }
    else if(age >= 65 ){
        console.log("Person is elder");
    }
}

stageOfLife("2");
stageOfLife("4");
stageOfLife("13");
stageOfLife("20");
stageOfLife("44");
stageOfLife("65");