const proPath = require("../lib/processPath");
const fs = require("fs/promises")
const Router = require("express").Router();
const   mime = require("mime-types")






Router.get('/:path?',async (req,res)=>{


let rutas = proPath(req.params.path)

try{



let mimetype = mime.lookup(rutas.AbsolutePath)
console.log(mimetype)
res.setHeader('Content-Disposition', `attachment; filename=${rutas.AbsolutePath}`);
res.setHeader('Content-Type', mimetype);
res.download(rutas.AbsolutePath)


}catch{


res.end("archivo no existee menolsitoxdxdxd")

}








})



module.exports = Router