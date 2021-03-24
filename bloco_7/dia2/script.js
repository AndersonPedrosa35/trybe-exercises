const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log(`  Pais: ${pairKeyValue[index][0]} 
  Capital: ${pairKeyValue[index][1]}`);
};