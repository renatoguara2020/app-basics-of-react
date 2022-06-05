import React, {Fragment, useState} from 'react'
import FeedbackList from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';
import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){

            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
  return (

   <Fragment> 
        <Header/>
        <div className="container">
          <FeedbackStats feedback={feedback}/>
          <FeedbackList   feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </Fragment>    
  )
}

export default App
