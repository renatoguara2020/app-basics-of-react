import React, {Fragment, useState} from 'react'
import { FeedbackItem } from './components/FeedbackItem.jsx';
import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);
  return (

   <Fragment> 
        <Header/>
        <div className="container">
          <FeedbackItem />
        </div>
    </Fragment>    
  )
}

export default App
