function logItems(n){
    //O(n)
    for(let i = 0; i < n; i++){
        //O(n)
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }    
    }
}

//O(n * n) => O(n ^ 2)
logItems(10, 10);
