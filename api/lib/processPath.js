const path = require("path")
require('dotenv').config()
const Disk =  process.env.CLOUD || path.join(__dirname,'disk') ;



function proPath(seudoPath){
const RelativePath =   seudoPath ?  seudoPath.replace(/--/g,'/') : '/';
const AbsolutePath =  path.join(Disk,RelativePath);
return {AbsolutePath,RelativePath}
}


module.exports = proPath