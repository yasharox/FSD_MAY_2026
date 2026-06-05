//----------------------- Map-----------------------------

const arr = [3,4,5,7];

function squareRoot (e){

    return Math.sqrt(e);
}

const ans = arr.map(squareRoot);
console.log(ans);

const res = arr.map( x => Math.sqrt(x));

////--------- filter ---------------------------------

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(num) {
return num % 2 === 0;
} 

const resv = arr1.filter(isOdd);
console.log(resv);

const result = arr1.filter(x => !isOdd(x) );
console.log(result);

///-------------------------filter--------------------------

const menu = [
"Chicken Biryani", "Egg Curry", "Onion Rings","Tandoor Chicken",
"Onion Pizza","Garlic Bread","Burger", "Dal Makhani",
"Egg Omlette","Garlic Naan","Masala Dosa","Egg rolls",
"Garlic Daal", "Chicken Garlic Rice","Butter Chicken","Kadhai Paneer",
"Garlic Noodles"
];

console.log ( menu);

function isveg( dish){
    if (dish.toLowerCase().includes("chicken")|| dish.toLowerCase().includes("egg") ){
        return false;
    }
    return true;
}

function isOnionGarlicFree(dish){
     if (dish.toLowerCase().includes("onion")|| dish.toLowerCase().includes("garlic") ){
        return false;
    }
    return true;
}



const veg = menu.filter( isveg);
console.log( veg);

const jainMenu = veg.filter( isOnionGarlicFree);
console.log( jainMenu);

const nonVeg = menu.filter(x => !isveg(x));
console.log(nonVeg);


///------------------------------ reduce ---------------------------