import { useEffect, useState } from 'react'
import File from '@/components/file/index'
import style from '@/app.module.css'
import Directorys from "@/components/dir/index"
import { Link, useParams } from 'react-router-dom'
import Poput from "@/components/poput/index"


export default function ContentDisplay() {
const [loading,setLoading] = useState(true)
const [data,setData] = useState({})
const [Top,setTop] = useState('/')
const [poput,Setpoput] = useState({open:false,option:'',title:'',type:''})




let   {ruta} =    useParams()
let secont;



useEffect(()=>{




  if(ruta){
    secont  = ruta.replace(/--/g,'/')
    
    secont = secont.split('/')
    
    secont.pop()
    secont = secont.join('--')
    console.log(secont)
    setTop(secont)
    }


let url = ruta || ''

fetch(`http://${import.meta.env.VITE_API_URL}:5000/content/${url}`).then((res)=>{




res.json().then((data)=>{

  console.log(data)
setData(data)
setLoading(false);

})






})








},[ruta])


console.log(poput)

  return (
    <div className={style.app}>
        
           { poput.open ? <Poput  poput={Setpoput}  title={poput.title}  type={poput.type}  option={poput.option}    /> : ''}




  
            
         
         
         
         

         <Link className={style.top_button} to={Top ? `/${Top}` : '/' }>to top</Link>
        <p className={style.poput}   onClick={()=>Setpoput({open:true,title:"upload File",option:"upload",type:"file"})} >upload file</p>
       <div className={style.container_data}>
  


       {  loading ?   <Loader/> :    
    
    <MapContent data={data} />
      
      
      
     
     }
  <div className={style.CreateDisplay} onClick={()=>Setpoput({open:true,title:"create a dir",option:"dir",type:"dir"})}>Create dir +</div>

       </div>
      
    </div>
  )
}


const MapContent = ({data}) =>{




return (

<>
{
data?.content?.files.map((element,index) => {
       return <File name={element} key={index} />
       })
      }
      {

data?.content?.directorys.map((element,index) => {
        return <Directorys name={element} key={index} />
       })
      }







</>







)






}



const Loader = () =>{




return (


<div className={style.containerSpiner} >
<div className={style.spinner}>




</div>




</div>












)










}