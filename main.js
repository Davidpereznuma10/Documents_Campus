//Self-executing functions

//Example 1
(function () {
    console.log("Hola!!");
  })();
  
//Example 2
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("David");