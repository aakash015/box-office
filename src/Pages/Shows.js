import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';
function Shows() {
  
  const params = useParams(); //this oarams will contain the id of the params 
  const {id} = params;
  const [show,setShow] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

   console.log("show rerendered");

  useEffect(()=>{
  

    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{

     
      if(isMounted){
        setShow(result)
        setIsLoading(false);
      }
      
    }).catch((err)=>{
      if(isMounted)
      {
        setError(err);
        setIsLoading(false);
      }

    })

    return ()=>{
        isMounted = false;
    }
  },[id]);

  
   if(isLoading)
   {
    console.log("isLoading rerendered")
    return <div>Data is being loaded</div>
   }
    if(error)
    { 
     console.log("Error in data loading rendered");
     return <div>Error in data loading</div>
    }

    return (
      
     <div>
       {
         console.log("this is show rendered")
       }
       this is show
     </div>
    )
}

export default Shows
