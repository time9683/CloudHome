const fs = require('fs/promises');
const proPath = require('../lib/processPath');
const Router = require('express').Router();

Router.get( '/:path?', async (req, res) => {



const path =    proPath(req.params.path)

console.log(path)


try{
const content = {files:[],directorys:[]}

let dir =   await  fs.opendir(path.AbsolutePath)

for await (dirent of dir){

   if(dirent.isDirectory()){

     content.directorys.push(dirent.name)

   }else{

  content.files.push(dirent.name)
   }



}



content.files.sort()
content.directorys.sort

res.end(JSON.stringify({paht:"/",content,succes:true}))
  }
catch{


res.end(JSON.stringify({succes:false}))

}




})


module.exports = Router