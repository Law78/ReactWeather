var names = ['Lorenzo', 'Federico', 'Giordano', 'Carmen'];

names.map(function(nome){
  this.names=nome;
  console.log('map', nome, 'this', this.names);
});
console.log('this globale dopo map', this);

names.map((nome) => {
  this.names=nome;
  console.log('map arrow', nome, 'this', this.names);
});
console.log('this globale dopo arrow', this);

var returnMe = (nome) => nome + "!!!";

console.log(returnMe("Lorenzo"));


function add(a, b){
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
