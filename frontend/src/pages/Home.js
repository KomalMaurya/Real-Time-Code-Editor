import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/editor">Code Compiler</Link>
      <div className='homePageWrapper'>
        <div className='formWrapper'>
          <input type='text' placeholder='ROOM ID'></input>
          <input type='text' placeholder='USERNAME'></input>
          <button type='button'>Join</button>
        </div>
      </div>
    </div>

  )
}

export default Home