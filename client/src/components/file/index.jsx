
const host = 'http://192.168.1.106:5000/donw/'
import Fileimg  from './file.svg'
import zipImg from "./zip.png"
import style from './file.module.css'
import { useParams } from 'react-router-dom'





export default File = ({name}) =>{

const {ruta} = useParams()



 let url = ruta ?  `${ruta}--` : ''





return(

<a     download="true"   href={`${host}${url}${name}`}   className={style.container}>

<img  className={style.img}  src={/\.jpg$/.test(name) || /\.png$/.test(name)  ? `${host}${name}`  :  /\.zip$/.test(name) ? zipImg :            Fileimg    }    />
<p className={style.text}>{name}</p>







</a>)
}