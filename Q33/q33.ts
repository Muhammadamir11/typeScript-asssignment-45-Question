let ordinalNumbers = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th'];
console.log("using loop");
ordinalNumbers.forEach(element => {
    console.log(element);    
});

let ordinalNumber = ['1','2','3','4','5','6','7','8','9'];
console.log("using ifelse");
ordinalNumber.forEach(element => {
    if(element == "1"){console.log(`${element}st`);}    
    else if(element == "2"){console.log(`${element}nd`);}
    else if(element == "3"){console.log(`${element}rd`);}
    else {console.log(`${element}th`);
    }
});