function logItems(n){
    //O(n)
    for(let index = 0; index < n; index++){
        console.log(index);
    }

    //O(n)
    for(let counter = 0; counter < n; counter++){
        console.log(counter);
    }    
}

//O(n + n) => O(2n) => O(n)
logItems(10);
