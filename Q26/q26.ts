type _color = "green" | "red" | "yellow";
let alienColor2: _color = "red";
console.log(`Alien color is "${alienColor2}" this time`);

if ((alienColor2 == "red") || (alienColor2 == "yellow")){
    console.log("alien scored 10 point");
}
else{
    console.log("alien 2 color is green, player just earn 5 points");
}

alienColor2 = "green";
console.log(`Alien color is "${alienColor2}" this time`);
if ((alienColor2 == "red") || (alienColor2 == "yellow")){
    console.log("alien scored 10 point");
}
else{
    console.log("alien color is green, player just earn 5 points");
}


