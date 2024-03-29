import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className='TrendCard'> 
       <h3>Suggested For you</h3>

       {TrendData.map((trend)=>{
        return(
            <div className="trend">
                <span>{trend.name}</span>
                <span>{trend.username}</span>
            </div>
        )
       })}


    </div>
  )
}

export default TrendCard
