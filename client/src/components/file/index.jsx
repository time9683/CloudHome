
const host =  `http://${import.meta.env.VITE_API_URL}:5000/donw/`;
import Fileimg  from './file.svg'
import zipImg from "./zip.png"
import VideoImg from './video.png'

import style from './file.module.css'
import MediaPlayer from '@/components/VideoR/index'
import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react';








export default File = ({name}) =>{

const [isOpen,setOpen] = useState(false);



const {ruta} = useParams()

console.log( import.meta.env.VITE_API_URL)

 let url = ruta ?  `${ruta}--` : ''
let source;



if(/\.jpg$/.test(name) || /\.png$/.test(name)){

  source =   `${host}${name}`

}else if(  /\.zip$/.test(name) ){



 source =    zipImg




} else if(/\.mp4$/.test(name)){


source = VideoImg;



}


else{


source = Fileimg
}




const OpenVideo = (e) =>{
if(!/\.mp4$/.test(name)) { return}

e.preventDefault();
setOpen(true)









}







return(
<>


{isOpen ? <MediaPlayer   open={setOpen} src={`${host}${url}${name}`} /> : ``}

<a  download={/\.mp4$/.test(name) ? false : true }   href={`${host}${url}${name}`}   onClick={OpenVideo} className={style.container}>

<img  className={style.img}  src={source}/>
<p className={style.text}>{name}</p>






</a>

</>
)
}