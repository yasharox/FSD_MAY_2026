

async function main() {
    for ( let i=1; i<=4; i++){
    const res = await fetch(`https://fakestoreapi.com/products/${i}`);
    const data = await res.json();
    console.log(data);
    }
}

main();