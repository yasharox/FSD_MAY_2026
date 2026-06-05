//task 1

const sentence = 'The brown fox jumps over the white lazy dog';

const task1 = sentence.split(' ').reverse().join(' ');
console.log(task1);



function reverseWords( str){
    return str.split(' ').map( x => 
        { return x.split('').reverse().join('')}).join(' ');
}

//Method 2

const task2 = reverseWords(sentence);
console.log("type2 => " + task2);


// Method 1

let ans ="";

 for ( let x of sentence.split(' ')){    
         ans +=  x.split('').reverse().join('')+ " ";
}
console.log("type1 => " + ans);




const final = [];

function revarr (sentence){    
    
    const words = sentence.split(" ");
    for( let x of words){
        const reword = x.split('').reverse().join("");
        final.push( reword);
    }
    console.log( "type3 => "+ final.join(" "));
}

revarr(sentence);
// *******************************************************
// pollyfills


