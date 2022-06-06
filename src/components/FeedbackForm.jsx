import React, {useState} from 'react'
import Card from './shared/Card';

const FeeddbackForm = () => {

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    //e.preventDefault();
     setText(e.target.value)
  }
  return (
    <Card>
        <form>
          <h2>How Would you rate your service with Us?</h2>
          {/*to-do  rating select Component*/}
          <div className="input-group">
           <input onChange={handleTextChange} type="text" placeholder='Write a Review!' value={text} />
           <button type="submit">Send</button>
          </div>

        </form>
    </Card>
  )
}

export default FeeddbackForm