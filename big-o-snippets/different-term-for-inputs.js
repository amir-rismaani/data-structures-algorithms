function logItems(a, b){
    //O(a)
    for(let index = 0; index < a; index++){
        console.log(index);
    }

    //O(b)
    for(let counter = 0; counter < b; counter++){
        console.log(counter);
    }    
}

function logItemsNested(a, b){
    //O(a)
    for(let i = 0; i < a; i++){
        //O(b)
        for(let j = 0; j < b; j++){
            console.log(i, j);
        }    
    }
}

//O(a + b)
logItems(20, 10);

console.log('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////')

//O(a * b)
logItemsNested(5, 10);

