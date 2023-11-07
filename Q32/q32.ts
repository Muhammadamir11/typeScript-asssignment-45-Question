let currentUsers = ['ali','salman','faiz','tasleem','feroz']
let newUsers = ['sheroz','umer','FEROZ','taha','salman']
let flag = 0;
for (const a of newUsers){
    for (const b of currentUsers){
        if((a == b) || (a.toUpperCase() == b.toUpperCase())){
            flag = 1;
        }
    }
    if (flag != 1){
        console.log(`user name is avialable`);
    }
    else{
        console.log(`the person will need to enter a new username`);
        flag = 0;
    }
}