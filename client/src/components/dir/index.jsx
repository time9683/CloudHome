import Dirimg  from './dir.png'
import style from './dir.module.css'
import { Link, useParams } from 'react-router-dom'







export default function Directorys({name}){
const {ruta} = useParams()
let Torute =     ruta ? `/${ruta}--${name}`  :   name    


let url = ruta ?  `${ruta}--` : ''

const del = (e) =>{
    e.preventDefault()
    e.stopPropagation()
    if(confirm("estas seguro de querer eliminar esta carpeta y todo el contenido en su interior?"))
    {
    
    fetch(`http://${import.meta.env.VITE_API_URL}:5000/rmdir/${url}${name}`,{method:"DELETE"}).then((r)=>{
    
    r.json().then((data)=>{
    
    if(data.success)
    {
    
    window.location.href = window.location.href
    
    }
    
    })
    
    
    })
    
    
    
    
    }else{
    
      
    }
    
    
    }
    

    return(
        <Link to={Torute}>
          
         <div      className={style.container}>
         <p onClick={(e)=>{del(e)}}  className={style.delete}>x</p>
        <img  className={style.img}  src={Dirimg}    />
        <p className={style.text}>{name}</p>
        </div>
         </Link>
       
        
        
        
        
        
        
        
        )
}