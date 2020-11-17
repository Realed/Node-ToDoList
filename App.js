const argv = require('./config/yargs').argv
const colors = require('colors')
const {crearToDo} = require('./to-do/to-do')
const {getListado} = require('./to-do/to-do')
const {actualizarToDo} = require('./to-do/to-do')
const {borrarToDo} = require('./to-do/to-do')

let comando = argv._[0]
// console.log(argv);

switch(comando){
    case 'crear':
        let tarea = crearToDo(argv.descripcion)
        // console.log(tarea);
        break;

    case 'listar':
        getListado()
        break;

    case 'actualizar':
        actualizarToDo(argv.descripcion, argv.completado)
        break;

    case 'borrar':
        borrarToDo(argv.descripcion)
        break;

    case undefined:
        console.log('\n<================| App de To Do List |================>\n'.bold.underline);
        console.log('Comandos Disponibles: '.bold + '["crear" - "listar" - "actualizar" - "borrar"]\n'.bold.yellow);
        break;
    
    default:
        console.log('\n[ERROR]'.underline.bold.red + ' - ' + `"${comando}"`.red.underline + ` Comando no reconocido\n`);
        break;

}