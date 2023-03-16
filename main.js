//Arrow function

const up = ( () => {
    let i = 0;
    return  () => {
      i+=2;
      return i;
    };
  })();
  
  typeof up; 
  console.log(up()); 
  console.log(up()); 
  console.log(up()); 