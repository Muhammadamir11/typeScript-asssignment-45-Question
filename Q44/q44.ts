let sandwiches = ((...items:string[]) => {
    console.log("Your ordered sandiwiche contains following ingredients");    
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);
    }
})
sandwiches("eggs", "spices", "oil")
sandwiches("spices", "oil")
sandwiches("eggs", "yougurst", "spices", "oil")