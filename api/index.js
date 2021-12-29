const  content =  require('./routes/content')
const  upload = require("./routes/upload")
const donw = require("./routes/donwload")
const dir = require("./routes/dir")
const rm = require("./routes/rm")
const rmdir = require("./routes/rmDir")
const cors = require("cors")


const app = require("express")()
app.use(cors())

app.get("/",(req,res)=> {res.send("bienvenido a la api")})
app.use("/content",content)
app.use("/upload",upload)
app.use("/donw",donw)
app.use("/dir",dir)
app.use("/rm",rm)
app.use("/rmdir",rmdir)
app.listen(5000)





