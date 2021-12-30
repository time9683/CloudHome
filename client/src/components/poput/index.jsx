import { useParams } from "react-router-dom";
import { useState } from "react"
import style from  './poput.module.css'





export default  function  Poput({poput,title,option,type}){
const {ruta} = useParams()
// console.log("chavez")

const [loading,setLonding] = useState(false)
const [file,setFile] = useState(null);
const [data,setData] = useState(null);
const [text,setText] = useState('');


const HandleSubmit = (e) =>{
    let Config;

    e.preventDefault()
    let url  = ruta ? ruta : ''

    if(type === 'file'){
let formData = new FormData();
formData.append("file",file)


Config = {

method:"POST",
body : formData

}

    }else{

  

Config = {
method:"POST",
}




    }
    setLonding(true)

    fetch(`http://${import.meta.env.VITE_API_URL}:5000/${option}/${url + text}`,Config).then((r)=>{


   r.json().then((data)=>{
       setLonding(false)
    setData(data)
    


   })
    })




}






return(


    <form encType="multipart/form-data" className={style.container}    onSubmit={HandleSubmit} >
       <p className={style.title_text}>{title}</p>
        {type === 'file'  ?   <label  className={style.fileButton}     htmlFor="file">Click to {title}</label> : ''   }
        { type === 'file' ?  <input  className={style.fileInput}    onChange={(e)=>{  setFile(e.target.files[0])  }} type="file" name="file" id="file" />  :   <input   placeholder="name of dir" onInput={(e)=>{setText(e.target.value)}} value={text}  type='text'/> }
           <button  className={style.btn} >{type === 'file' ? 'upload' : 'create'}</button>
           <button  type="button"   onClick={()=>{poput({open:false})}}  className={style.btn}>close</button>

           {loading ? <p style={{color:"white",fontSize:'16px'}}>loading</p> :      <p style={{color:"white",fontSize:'16px'}} >{data?.message}</p>   }
    </form>
)








}