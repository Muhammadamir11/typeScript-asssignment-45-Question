let cities = ["Hyderabad","Karachi","Sukkur","Nawabshah","Khairpur"]
let Cities:Array<string> = ["Hyderabad","Sukkur","Nawabshah","Khairpur"]
let citiesOfPak:string[] = ["Hyderabad","Karachi","Sukkur","Nawabshah","Khairpur"]

// intentional error
for (let i = 0; i < cities.length - 1; i++){
    console.log(cities[i+2].charAt(5));
}

