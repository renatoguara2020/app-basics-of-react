import React from 'react'


const App = () => {
 
    const title = 'Blog Post';
    const body = 'This is my Blog Post';
    const comments = [

        {id:1, text: 'Comment One'},
        {id:2, text: 'Comment Two'},
        {id:3, text: 'Comment Three'}
    
    ]

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
    

      <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
             {comments.map((comment, index)=>(
                 

                <li key={index}>{comment.text}</li>

          ))}
          </ul>
      </div>
    </div>
  )
}

export default App;
