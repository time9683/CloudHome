import Dirimg  from './dir.png'
import style from './dir.module.css'
import { Link, useParams } from 'react-router-dom'







export default function Directorys({name}){
const {ruta} = useParams()
let Torute =     ruta ? `/${ruta}--${name}`  :   name    

    return(
        <Link to={Torute}>
         <div      className={style.container}>
        
        <img  className={style.img}  src={Dirimg}    />
        <p className={style.text}>{name}</p>
        </div>
         </Link>
       
        
        
        
        
        
        
        
        )
}