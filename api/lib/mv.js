const path = require("path")




module.exports = function moveFile(file,ruta){


let SaveStorage = path.join(ruta,file.name)



file.mv(SaveStorage,(err)=>{

console.log(err)

})







}