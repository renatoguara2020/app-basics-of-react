import React, {useState} from 'react'
import Card from './shared/Card';


export const FeedbackItem = ({item}) => {

    
    

  return (

    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>

  )
}
