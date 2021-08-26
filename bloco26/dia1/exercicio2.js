const readline = require('readline-sync');
async function manipulaPromisse(param1, param2,) {
  const promisse = await new Promise((resolve, reject) => {
    if(typeof(param1) != 'number' || 
    typeof(param2) != 'number' || 
    typeof(param3) != 'number'){
      return reject(new Error("Informe apenas números"));
    };
    const total = (param1 + param2) * param3;
    if (total < 50) return reject("Valor muito baixo");
    return resolve(total);
  });
  return promisse;
}

async function chamaPromisse() {
  return await manipulaPromisse(10, 20, 20);
}

chamaPromisse()
