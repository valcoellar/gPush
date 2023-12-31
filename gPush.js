// gPush

// -----------------------------
// version 1.0
// Author: Valentin Coellar S.
// 2023
// ----------------------------


const readline = require('readline');   
const { exec } = require('child_process');  // to execute in cli

const now = new Date().toLocaleString();
let commitMsg = now;

function menu(){
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

								console.log(stdout);
								console.error(stderr);
							  
							  //console.log(`stdout: ${stdout}`);
							  //console.error(`stderr: ${stderr}`);
							});

}


rl.question('Select an option:\n1. Select work dir \n2. Change msg  \n3. show Status\n4. Add . all\n5. Fast Push\n<--. Exit Press CTRL + c\n', (respuesta) => {
  switch (respuesta) {
    case '1':
      console.log('\nOpción 1 seleccionada\n');
	process.exit(0);
    break;
    case '2':
      console.log('\nOpción 2 seleccionada\n');
       break;
    case '3':
      console.log('\n3-Executing git status\n');
			runCommands("clear");
			runCommands("git status");
	break;
	case '4':
      console.log('\n4-Executing git add .\n');
			runCommands("git add .")
	break;
	case '5':
	      console.log('\n5-Executing git add. // commit -m "date" // push \n');
		runCommands("git add .")
		runCommands("git commit -m " + "'" + commitMsg + "'")
		runCommands("git push ");
		process.exit(0);
	break;
	
	

    default:
      console.log('\nNot an Option\n');

      break;
  }
  rl.close();
  menu()
});

}


menu();

// git add . && git commit -m "mensaje de commit" && git push
// git add . && git commit -m "$(date)" && git push

// git add . && git commit -m "mensaje de commit $(date)" && git push https://<nombre_de_usuario>:<token>@github.com/<nombre_de_usuario>


