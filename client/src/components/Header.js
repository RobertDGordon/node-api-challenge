import React from 'react';
import '../App.css';

function Home(props) {

  return (
      <header>
        <h1>Node API Challenge</h1>
        <button onClick={()=> props.history.push('/projects')}>Show me the data!</button>
      </header>
  );
}

export default Home;