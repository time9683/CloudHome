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
const [OpenP,Setpoput] = useState(false)



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




  return (
    <div className={style.app}>
        
           { OpenP ? <Poput  poput={Setpoput} /> : ''}




  
            
         
         
         
         

         <Link className={style.top_button} to={Top ? `/${Top}` : '/' }>to top</Link>
        <p className={style.poput}   onClick={()=>Setpoput(true)} >upload file</p>
       <div className={style.container_data}>
  


       {  loading ?   <Loader/> :    
    
    <MapContent data={data} />
      
      
      
     
     }
  

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