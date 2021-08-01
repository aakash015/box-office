import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

   console.log("I am rerendered");

  const [input,setInput] = useState('');

  function onInputChange(event){
     
    //  console.log(input)
     setInput(event.target.value);

  }

  function onSearch()
  {
    // https://api.tvmaze.com/search/shows?q=men
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(
      (response)=>{
         return response.json();
      }
    )
    .then((response)=>{
      // console.log('@@@')
      console.log(response)
    })

  }
  
  function onKeyDown(event){
     if(event.keyCode===13)
      onSearch();
  }
  return (
    <div>
      <MainPageLayout>
      <input type = "text" onKeyDown = {onKeyDown} onChange = {(event)=>onInputChange(event)} value = {input} />
      <button type="button" onClick = {onSearch}>Search</button>
      </MainPageLayout> 
    </div>
  )
}

export default Home
