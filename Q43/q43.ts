let showFunction = (nameOfMagincian:string[]) => {
    nameOfMagincian.forEach(name => console.log(name))
}

let makegreat = (nameOfMagincian:string[]) => {
    for (let i = 0; i< nameOfMagincian.length; i++){
        nameOfMagincian[i] = nameOfMagincian[i].concat(" the great")
    }
    return nameOfMagincian;
}

let megicians:Array<string> = ['Fasi','watson','kiwi','bold','nehal']
showFunction(megicians);
let copyArray = [...megicians]
makegreat(copyArray);
console.log(copyArray);
console.log(megicians);

