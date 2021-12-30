import { useParams } from "react-router-dom";
import { useState } from "react"
import style from  './poput.module.css'





export default  function  Poput({poput}){
const {ruta} = useParams()


const [loading,setLonding] = useState(false)
const [file,setFile] = useState(null);
const [data,setData] = useState(null);



const HandleSubmit = (e) =>{
    e.preventDefault()

let formData = new FormData();
formData.append("file",file)



let url  = ruta ? ruta : ''
const Config = {


method:"POST",
body : formData


}
    setLonding(true)

    fetch(`http://192.168.1.106:5000/upload/${url}`,Config).then((r)=>{


   r.json().then((data)=>{
       setLonding(false)
    setData(data)
    


   })
    })




}






return(


    <form encType="multipart/form-data" className={style.container}    onSubmit={HandleSubmit} >
       <p className={style.title_text} >Upload files</p>
          <label  className={style.fileButton}     htmlFor="file">Click to submit file</label>
          <input  className={style.fileInput}    onChange={(e)=>{  setFile(e.target.files[0])  }} type="file" name="file" id="file" />
           <button  className={style.btn} >uppload</button>
           <button  type="button"   onClick={()=>{poput(false)}}  className={style.btn}>close</button>

           {loading ? <p style={{color:"white",fontSize:'16px'}}>loading</p> :      <p style={{color:"white",fontSize:'16px'}} >{data?.message}</p>   }
    </form>
)








}