/*
<!--Defination of Promises -->
<!--The Promise represents the eventual completion (or Failure ) of an asynchronous operation and its result value -->
<!--
A Promise is in one of these states:

   1. pending:     initial state, neither fulfilled nor rejected.
   2. fulfilled:   meaning that the operation was completed successfully.
   3. rejected:    meaning that the operation failed.
-->   
*/




const promiseOne = new Promise(function (resolve, reject) {
  // Do any task / async task
  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); // now connected to .then
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Comsumed");
});

// another way of defining the same thing which is above
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved ");
});

// Passign an Object

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "niyaz",
      email: "niyazhauque@gmail.com",
    });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "niyaz",
        password: "13Niyaz",
      });
    } else {
      reject("ERROR:Something Went Wrong");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected ");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = !true;
    if (!error) {
      resolve({
        username: "JavaScript",
        Password: "19482048",
      });
    } else {
      reject("ERROR: JS went Wrong");
    }
  }, 1000);
});

// async await is also one of the way to consume promises same as (.try ) (.catch)
async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();



// Calling  A Api With Fetch with (async await)
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const data = await response.json();  // it should also be await because it takes time to convert it into json format
    
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

// calling a APi with Fetch with (try catch )


fetch ('https://jsonplaceholder.typicode.com/users')
.then(function (response){
return response.json()
})
.then(function(data){
 
    console.log(data)
})
.catch(function(error){
 console.log(error)
})
.finally(function(){
console.log('Completed')
})
