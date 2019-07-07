
let a = +prompt('the value of A');
let b = +prompt('the value of B');
let c = +prompt('the value of C');
if (a + b >= c) {
    if (a + c >= b){
        if (a + b >= c){
            if( a === b || a === c || c === a){
                console.log('Isosceles triangle');
                alert('Isosceles triangle');
            } else if ( a=== b && c === b){
                console.log('Equivalent triangle');
                alert('Equivalent triangle');
                
            } else {
                console.log('Normal triangle');
                alert('Normal triangle');
            
            } 
        }
    }           
} else {
    console.log('Triangle doesn’t exist');
    alert('Triangle doesn’t exist');
}

