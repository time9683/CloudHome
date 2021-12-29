
const host = 'http://192.168.1.105:5000/donw/'
import Fileimg  from './file.svg'
import style from './file.module.css'





export default File = ({name}) =>{



const Donwload = () =>{


fetch(`${host}${name}`).then((r)=>{



console.log(r.status)


})






}









return(

<a     download="true"   href={`${host}${name}`}   className={style.container}>

<img  className={style.img}  src={/\.jpg$/.test(name) ? `${host}${name}`  :  Fileimg    }    />
<p className={style.text}>{name}</p>







</a>)
}