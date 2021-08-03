import React from 'react'
import ShowCard from './ShowCard'
import notFound from '../../images/not-found.png';

const ShowGrid = ({data}) => {
  return (
    <div>
       {
         data.map((item)=>{
          return (<ShowCard 
                  key = {item.show.id} 
                  id={item.show.id} 
                  name = {item.show.name} 
                  image = {item.show.image?item.show.image.medium : notFound}
                  summary = {item.show.summary}
                />)   
         })
       }
    </div>
  )
}

export default ShowGrid
