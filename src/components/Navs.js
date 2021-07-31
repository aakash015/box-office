import React from 'react'
import {Link} from 'react-router-dom' 


const LINKS = [
  {to:'/',text : 'Home'},
  {to:'/starred',text:'Starred'},
  
]
const Navs = () => {
  return (
    <div>
       <ul>
        {
          LINKS.map(function(elements){
            return <li key ={elements.to}><Link to = {elements.to}>{elements.text}</Link></li>
          })
        }
       </ul>
    </div>
  )
}

export default Navs
