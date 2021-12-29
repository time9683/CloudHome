import { useEffect, useRef, useState } from 'react'
import style from './MediaPlayer.module.css'
import btnPlay from './play.svg'
import btnPause from './pause.svg'



export default function  MediaPlayer({src,open}){
    const [IsPlaying,setPlay] = useState(false);
    const [time,setTime] = useState(0);
    const [duration,setDuration] =useState();
    const [isInbar,setBar] = useState(false)
    const [BarTime,setBartime] = useState();
    const [position,setPosition] =useState(0)
const ref =useRef();







const onTecla = (e) =>{



console.log(e)

}


const calculateTimeofposition = (position) =>{

setPosition(position)
let porcentaje =  position * 100 / ref.current.offsetWidth ;
let TimeCurrent = duration *  porcentaje / 100 
setBartime(TimeCurrent)

}








const CalculateTime = (time) =>{


    let segundos  =  Math.floor(time) 

    let minutos =  Math.floor(time / 60)  > 0 ?  Math.floor(time/60)  :  0  ;   
    let horas =  Math.floor(time / (60 * 60)).toFixed() > 0 ? Math.floor(time / 3600) : 0
      
    



    if(segundos > 60){
      
      
      segundos =   Math.floor(time -  Math.floor(minutos) * 60)
      
      
    }
      
      
      if(minutos >= 60){
        
      minutos = Math.floor(minutos - Math.floor(horas)*60)
        
        
      }
    
    
      
      
      if(segundos < 10){
        
        segundos = `0${segundos}`
        
      }
      
      if(minutos < 10 ){
        
         minutos = `0${minutos}`
        
      }
      

      

      if(Math.floor(horas) <= 0){
        horas = ''
 
       }
       
     
     
             if(horas < 10 && horas > 0){
         
          horas = `0${horas}:`
         
       }
   
     
     
    
    
      
    return   `${horas}${minutos}:${segundos}`
    
    
    
    
    }
    
    
    
    







const setVideoTime = () =>{

ref.current.currentTime = BarTime




}







const controlPlay = () =>{


if(ref.current.paused)
{

    setPlay(true)
ref.current.play()

}else{
setPlay(false)
ref.current.pause()

}
}


return(



<div     className={style.container}>

<p  onClick={()=>{open(false)}} className={style.close} >x</p>

<video onClick={controlPlay}   onEnded={()=>{setPlay(false)}} onDurationChange={(e)=>{setDuration(e.target.duration)}} onTimeUpdate={(e)=>setTime(e.target.currentTime)} ref={ref} className={style.Video} src={src}></video>


<p className={style.time}>{CalculateTime(time) + '/' + CalculateTime(duration)}</p>


{isInbar ? <div  style={{left:position + 'px'}}  className={style.counterbar}>{  CalculateTime(BarTime)}</div> : ''}
<div   onClick={setVideoTime} onMouseOut={()=>{setBar(false)}}  onMouseEnter={()=>setBar(true)} onMouseMove={(e) =>{ calculateTimeofposition(e.nativeEvent.offsetX)}}   className={style.fullbar}>
<div   style={{width:(time * 100 / duration) + '%'}} className={style.currentbar}></div>
</div>

{IsPlaying ?   <p className={style.Playbutton} onClick={()=>{controlPlay()}} ><img src={btnPause}/></p> :
<p className={style.Playbutton}   onClick={()=>{controlPlay()}}  ><img src={btnPlay}/>  </p>
}


<a  download='true'   href={src}    className={style.download}>Download</a>


</div>
)









}