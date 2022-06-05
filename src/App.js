import React, {Fragment} from 'react'
import { FeedbackItem } from './components/FeedbackItem.jsx';
import Header from './components/Header.jsx';

const App = () => {
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
