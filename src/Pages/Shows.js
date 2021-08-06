import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';
function Shows() {
  
  const params = useParams(); //this oarams will contain the id of the params 
  const {id} = params;
  const [show,setShow] = useState(null);
  
  
  useEffect(()=>{
  
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{
       setShow(result)
    })
  },[id]);

  console.log("show called",show)
  return (
    <div>
    
    </div>
  )
}

export default Shows
