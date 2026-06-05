




// fun();

// console.log(num);
// function fun (){
//     console.log('inside fun');
// }


// let  num = 100;

const ard = [ 1,2,3,4,5,6,7];

const ans = [];
const area = [];
const bens = [];

for ( let i=0; i<ard.length; i++){

    ans[i] = ard[i]* Math.PI*2;
    area[i]= ard[i] *ard[i]* Math.PI;
    bens[i] = ard[i]*2;

    
}

console.log( ans, area, bens);

// Higher Order function - passing the logic / fn in argument of other fn
function perimeter (x){
    return x* Math.PI*2
}

function aread (x){
    return x*x* Math.PI;
}
function diameter ( x){
    return x*2;
}


function calculate(ard, logic){
    const res =[];
    for( const radius of ard){
        res.push( logic(radius));
    }

    return res;

}

console.log(calculate(ard,perimeter),
            calculate(ard,aread),
            calculate(ard,diameter));