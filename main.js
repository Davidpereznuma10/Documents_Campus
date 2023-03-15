//closures

const up = (function () {
    let i = 0;
    return function () {
      i+=2;
      return i;
    };
  })();
  
  typeof up; 
  console.log(up()); 
  console.log(up()); 
  console.log(up()); 