import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';

const Home = () => {

 

  const [input,setInput] = useState('');
  const [results,setResults] = useState(null);

  function onInputChange(event){
     
    
     setInput(event.target.value);

  }

  function onSearch()
  {
    apiGet(`/search/shows?q=${input}`).then((response)=>{
     
      setResults(response);
    })

   
   
  }
  
  function onKeyDown(event){
     if(event.keyCode===13)
      onSearch();
  }

  function renderResults(){
     
       if(results && results.length===0)
         return <div>No Results</div>
       else
       if(results && results.length>0)
        {
          
          return ( 
             <div>
               {
               results.map((elements)=>{
                  return <div key = {elements.show.id}>{elements.show.name}</div>     
               })
              }
             </div>
          )
        }

        return null;

  }
  return (
    <div>
      <MainPageLayout>
      <input type = "text" onKeyDown = {onKeyDown} onChange = {(event)=>onInputChange(event)} value = {input} />
      <button type="button" onClick = {onSearch}>Search</button>

      {renderResults()}
      </MainPageLayout> 
    </div>
  )
}

export default Home
