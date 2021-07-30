const orderFood = () => {

    // A buzzer will be handled to you
    return new Promise((resolve, reject) => {
   
     // Cooking time could be anything between 5 and 20 seconds
     const cookingTime = 5000 + Math.random() * 15000;
   
     // The food will be prepared in the given time
     setTimeout(() => {
      const foodReady = true;
   
      // If the food is ready after the cooking time,
      // pass the information on to the buzzer. Also,
      // pass on the cooking time in seconds
      if (foodReady) {
       const time = (cookingTime / 1000).toFixed();
       resolve(time);
   
       // If it is not ready for some reason, throw an exception which
       // you can later catch when calling the function
      } else {
       const reason = 'Your food could not be prepared ...';
       reject(reason);
      }
     }, cookingTime);
    });
   };
   
   // Call the initial function. Wait for it to resolve
   orderFood()
   
    // The variable in the .then method is what you have passed
    // into the resolve function within the promise
    .then((time) => {
     console.log(`BZZZZZ BZZZZZ - Your food is ready.`);
     console.log(`Your waiting time was ${time} seconds`);
    })
   
    // Catch the reason for the promise rejection
    .catch((reason) => {
     console.log(reason);
    })
   
    // Perform an operation after any type of outcome
    .finally(() => {
     return 'Handing buzzer back to restaurant staff'
    });