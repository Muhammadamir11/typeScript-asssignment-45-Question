
function aliencolor(color:string){;
    let alienColor2 = color;
    console.log(`Alien color is "${alienColor2}" this time`);
    if (alienColor2 == "red" ){
        console.log("alien scored 15 point");
    }
    else if(alienColor2 == "green"){
        console.log("alien scored 5 point");
    }
    else {
        console.log("alien scored 10 points");
    }
}

aliencolor("red");
aliencolor("yellow");
aliencolor("green");
