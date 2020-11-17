const colors = require('colors')
const argv = require('yargs')
    .command('crear', '-  Crear una nueva tarea  -'.bgWhite.black.bold.underline, {
        descripcion: {
            alias: 'd',
            demandOption: true,
            description: 'Añade una descripción a tu tarea',
        }
    })
    .command('actualizar', '-  Actualiza el estado de una tarea  -'.bgWhite.black.bold.underline, {
        descripcion: {
            alias: 'd',
            description: 'Añade una descripción a tu tarea',
            demandOption: true,
        },
        completado: {
            alias: 'c',
            description: 'Marca como completada la tarea (false/true)',
            default: true,
        }
    })
    .command('borrar', '- Borra una tarea -'.bgWhite.black.bold.underline, {
        descripcion: {
            demandOption: true,
            alias: 'd',
            description: 'Añade la descripción de la tarea que quieras borrar',
        }
    })
    .help()
    .argv

module.exports = {
    argv
}