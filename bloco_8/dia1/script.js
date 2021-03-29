const wakeUp = () => console.log('Acordando!!');
const eatBreakFast = () => console.log('Bora tomar café');
const sleep = () => console.log('Hora de dormir');
function doingThings (action) {
  action()
}
doingThings(sleep);
console.log(" \n");
console.log('===================================================================');
console.log(" \n");

let id = {};
const register = (nome) => ({
  nomeCompleto: nome,
  email: nome.toLowerCase().split(' ').join('_') + '@trybe.com',
});
function newEmployees (register) {
  const usuarios = {
    id1: register("Anderson pedrosa"),
    id2: register("Daniel CArlos"),
    id3: register("Antonio Pedrosa")
  }
  console.log(usuarios);
} newEmployees(register);
