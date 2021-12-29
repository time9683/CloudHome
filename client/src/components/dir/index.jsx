import Dirimg  from './dir.png'
import style from './dir.module.css'








export default function Directorys({name}){

    return(

        <div      className={style.container}>
        
        <img  className={style.img}  src={Dirimg}    />
        <p className={style.text}>{name}</p>
        
        
        
        
        
        
        
        </div>)
}