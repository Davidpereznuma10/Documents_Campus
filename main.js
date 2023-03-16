//Lexical scope This

// Example 1
const a = function () {
  console.log(this);
};
const b = () => {
  console.log(this);
};

a();
b();

//Example 2

father = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

father.a();
father.b();
