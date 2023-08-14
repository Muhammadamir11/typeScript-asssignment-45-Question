let personName = "Syed abdullah s/o syed anwar ali";
console.log(`Lower Case: ${personName.toLowerCase()}`);
console.log(`Upper Case: ${personName.toUpperCase()}`);
let splitStr = personName.split(" ");
let finalStr = [""];
for (let i=0; i<splitStr.length; i++){
    finalStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
}
let finalStr1 = finalStr.join(" ");
console.log(`Title Case: ${finalStr1}`);
