//Functions like objects
const Hello = new Function("return 'Hello Word';");
console.log (Hello());
console.log(typeof(Hello))