const fs = require("fs/promises")
const proPath = require("../lib/processPath")
const Router = require("express").Router()


Router.delete("/:path?",async (req,res)=>{

const  AbsPath = proPath(req.params.path).AbsolutePath




try{
await fs.rmdir(AbsPath)
res.end(JSON.stringify({success:true}))
}
catch(e){
res.end(JSON.stringify({success:false,men:e}))
}
})




module.exports = Router
