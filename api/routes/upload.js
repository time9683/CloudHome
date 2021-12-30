const fileUpload = require("express-fileupload");
const mv = require("../lib/mv");
const proPath = require("../lib/processPath");

const Router = require("express").Router();



Router.use(fileUpload())
Router.post("/:path?",(req,res)=>{



const Ruta = proPath(req.params.path)




if(!req.files){
console.log("Caca")
res.status(400).json({
    success: false,
    message: 'No files were uploaded'
})
return
}



let files = req.files.file
if(!Array.isArray(files)){
files = [files]


}


try{
for(const file of files){


mv(file,Ruta.AbsolutePath)



}

}catch(err){
console.log(err)
res.status(400).json({
    success: false,
    message: 'the file generate one error'
})

}




res.status(200).json({
    success: true,
    message: 'the file is upload'
})

})



module.exports = Router;