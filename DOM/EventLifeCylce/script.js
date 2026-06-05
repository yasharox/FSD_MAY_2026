
const image = document.querySelector("img");


const im1 = "https://images.unsplash.com/photo-1773332611528-566f16120979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";

const im2 ="https://images.unsplash.com/photo-1779863897195-97ad55817258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D";

let isTrue = false;


function toggleImage (){

    if ( isTrue){

        image.setAttribute( 'src', im1);

    }else{

        image.setAttribute( 'src', im2);


    }

    isTrue = !isTrue

}

setInterval( toggleImage, 1000);

