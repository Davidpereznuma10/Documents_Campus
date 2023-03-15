//callbacks
const fB = function () {
    console.log("Hello world.");
  };
  

  const fA = function (callback) {
    callback();
  };
  
  fA(fB);