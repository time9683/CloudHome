const Router = require("express").Router();
const fs = require("fs/promises");
const proPath = require("../lib/processPath");




Router.post("/:path",async (req,res)=>{

let AbsPath =  proPath(req.params.path).AbsolutePath;


try{

await fs.mkdir(AbsPath);

res.end(JSON.stringify({succes:"true"}))
}
catch{

res.end(JSON.stringify({succes:"false"}))

}
})


module.exports = Router