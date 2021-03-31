let persons = [

  { name: 'Maria', age: 59 },

  { name: 'Juan', age: 29 },

  { name: 'Pedro', age: 29 },

  { name: 'Pedro', age: 59 },

  { name: 'Pedro', age: 29 }

];
function filtrarporedad(array, edad){
  return array.filter(number => number.age === edad)
}

const veinteynueveaños = filtrarporedad(persons, 29);
const cincuentaynueveaños = filtrarporedad(persons, 59);
console.log(`29: ${veinteynueveaños.length}`)
console.log(`59: ${cincuentaynueveaños.length}`)

const primera29 = persons.find(nombre => nombre.age === 29);
console.log(primera29);

