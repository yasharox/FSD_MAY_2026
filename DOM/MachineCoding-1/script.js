

btn.addEventListener('click' ,  function (){

    const todotext =  input.value;

    const li = document.createElement(li);
    li.innerText = todotext;

    list.append('li');

})