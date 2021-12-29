import { useEffect, useState } from 'react'
import File from '@/components/file/index'
import style from '@/app.module.css'
import Directorys from "@/components/dir/index"


export default function ContentDisplay() {
const [loading,setLoading] = useState(true)
const [data,setData] = useState({})


useEffect(()=>{
let   url =    window.location.pathname;



fetch(`http://192.168.1.105:5000/content${url}`).then((res)=>{




res.json().then((data)=>{

  console.log(data)
setData(data)
setLoading(false);

})






})








},[])




  return (
    <div className={style.app}>
      <div  className={style.container_data}>
      { loading ? <p>loading</p> : data?.content?.files.map((name,index) => {
         return <File name={name}/>
      }) }
      {loading ? <p>loading</p>  : data?.content?.directorys.map((element,index) => {
         return <Directorys name={element}/>
      }) }

</div>
      
    </div>
  )
}