const path = require("path")
const Disk = '/home/luis/shareCloud'



function proPath(seudoPath){
const RelativePath =   seudoPath ?  seudoPath.replace(/--/g,'/') : '/';
const AbsolutePath =  path.join(Disk,RelativePath);
return {AbsolutePath,RelativePath}
}


module.exports = proPath