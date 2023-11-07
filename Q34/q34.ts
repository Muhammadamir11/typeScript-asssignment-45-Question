let favouritePizza = ['fajita','barbq','pepperoni']
favouritePizza.forEach(element => console.log(element));
favouritePizza.forEach(element => console.log(`I like ${element} pizza`));
console.log("how much you like pizza");
for (let i in favouritePizza){
    console.log(`I like ${favouritePizza[i]}`);
}
console.log(`I really love pizza`);

