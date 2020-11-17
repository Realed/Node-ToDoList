const { underline, green, bgRed, red, bgGreen } = require('colors')
const fs = require('fs')
let toDoList = []

const guardarToDo = (actualizada) =>{
    let data = JSON.stringify(toDoList)
    fs.writeFile('./db/data.json', data ,(error) =>{
        if(error){
            throw error
        }

        switch (actualizada) {
            case true:
                console.log('\nTarea actualizada - Marcada como hecha\n'.underline.green)
                break;

            case 'borrado':
                break;

            default:
                console.log('\nTarea guardada\n'.underline.green)
                break;
        }
    })
}

const cargarDB = () =>{
    try{
        toDoList = require('../db/data.json')
    } catch (error) {
        toDoList = []
    }
}

const crearToDo = async (desc) =>{
    cargarDB()

    let toDo = {
        desc,
        completado: false,
    }

    toDoList.push(toDo)
    guardarToDo()
    return toDo
}

const getListado = () =>{
    cargarDB()
    console.log('\n==============TO DO LIST==============\n'.yellow.bold);
    for(let toDo of toDoList){
        console.log( 'Descripción: '.bold + toDo.desc + ' Completado: '.bold + `${toDo.completado ? bgGreen(toDo.completado) : bgRed(toDo.completado)}`);
    }
    console.log('\n======================================\n'.yellow.bold);
}

const actualizarToDo = (descripcion, completado = true) =>{
    cargarDB()
    let index = toDoList.findIndex(tarea => tarea.desc === descripcion)
    if ( index >= 0 ) {
        toDoList[index].completado = completado
        guardarToDo(actualizada = true)
        return true
    } else{
        console.log(`\n[ERROR]`.red.underline.bold + ` - No se econtró la tarea con la descripción ` + `"${descripcion}"\n`.red.underline);
    }
}

const borrarToDo = (descripcion) =>{
    cargarDB()

    const newTodoList = toDoList.filter(toDo => toDo.desc !== descripcion)
    if(newTodoList.length !== toDoList.length){
        toDoList = newTodoList
        guardarToDo('borrado')
        console.log(`\nTarea`.green.underline + ` "${descripcion}" `.bold + `borrada con exito\n`.green.underline);
    } else{
        console.log(`\n[ERROR]`.red.bold.underline + ` - No se reconoce la tarea con descripción ` + `"${descripcion}"\n`.red.underline);
    }
}

module.exports = {
    crearToDo,
    getListado,
    actualizarToDo,
    borrarToDo,
}  