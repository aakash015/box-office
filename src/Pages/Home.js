import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';

const Home = () => {

 

  const [input,setInput] = useState('');
  const [results,setResults] = useState(null);
  const [searchOption,setSearchOption] = useState('shows');

  function onInputChange(event){
     
     
     setInput(event.target.value);

  }

  function onSearch()
  {
    apiGet(`/search/${searchOption}?q=${input}`).then((response)=>{
     
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
                results[0].show?( results.map((elements)=>{
                  return <div key = {elements.show.id}>{elements.show.name}</div>     
               }) ) :(
               results.map((elements)=>{
                return <div key = {elements.person.id}>{elements.person.name}</div>     
             }))

              }
             </div>
          )
        }

        return null;

  }

  function onRadioChange(event){
     
  //  console.log(event.target.value);
    setSearchOption(event.target.value);

   
  }

  const isShowSearch = searchOption==='shows';

  return (
    <div>
      <MainPageLayout>
      <input type = "text"
       onKeyDown = {onKeyDown} 
       onChange = {(event)=>onInputChange(event)}
        value = {input}
        placeholder = "Search for something" 
     />

     <div>
       <label htmlFor = "shows-search">
         Shows 
         <input id = "shows-search"
         type="radio" 
         value = "shows" 
         onChange = {onRadioChange}
         checked = {isShowSearch}
         />
       </label>

       <label htmlFor = "actors-search">
         Actors
         <input id="actors-search" 
         type="radio" 
         value = "people" 
         onChange = {onRadioChange}
         checked = {!isShowSearch}
         />
       </label>

     </div>
      <button type="button" onClick = {onSearch}>Search</button>

      {renderResults()}
      </MainPageLayout> 
    </div>
  )
}

export default Home
