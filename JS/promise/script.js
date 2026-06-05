

// 1creation of promise

const promise = new Promise((resolve, reject) => {

    setTimeout (() =>{
        resolve(100);
        //reject( new Error('problem'));

    },2000);
});

// 2.consuming promise ( subscription menthod then to read value of promise in fulfill state  )
promise
    .then( function(value){
            console.log(value);
    })
    .catch( function(err){
          console.log( err.message);
    })

    // good news is more time consuming

    // micro task queue executes promise ( priority)
    // >> set time out-> by the call bac queue