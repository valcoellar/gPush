// gPush

// -----------------------------
// version 1.0
// Author: Valentin Coellar S.
// 2023
// ----------------------------

const readline = require('readline');   
const { exec } = require('child_process');  // to execute in cli

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runCommands(comm){
	// execute comm in cli
		exec(comm, (error, stdout, stderr) => {
							  if (error) {
							    console.error(`Error al ejecutar el comando: ${error}`);
							    return;
							  }
							  console.log(`stdout: ${stdout}`);
							  console.error(`stderr: ${stderr}`);
							});
}


rl.question('Seleccione una opción:\n1. Select work dir \n2. Change msg  2\n3. show Status', (respuesta) => {
  switch (respuesta) {
    case '1':
      console.log('Opción 1 seleccionada');
      break;
    case '2':
      console.log('Opción 2 seleccionada');
       break;
    case '3':
      console.log('Opción 3 seleccionada');
			runCommands("git status")
      break;

    default:
      console.log('Opción inválida');
      break;
  }
  rl.close();
});








/*
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
*/
