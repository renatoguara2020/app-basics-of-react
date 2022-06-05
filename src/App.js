import React, {Fragment, useState} from 'react'
import FeedbackList from './components/FeedbackList';
import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);
  return (

   <Fragment> 
        <Header/>
        <div className="container">
          <FeedbackList   feedback={feedback}/>
        </div>
    </Fragment>    
  )
}

export default App
