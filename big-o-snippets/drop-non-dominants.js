function logItems(n){
    //O(n)
    for(let i = 0; i < n; i++){
        //O(n)
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }    
    }

    //O(n)
    for(let k = 0; k < n; k++){
        console.log(k);
    }    
}

//O(n * n) + O(n) => O(n ^ 2) + O(n) => O(n ^ 2)

//Drop O(n), because is non-dominant.

logItems(10);
