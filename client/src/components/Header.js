import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

function Home(props) {

  return (
      <Head>
        <h1>Node API Challenge</h1>
        {/* <button onClick={()=> props.history.push('/projects')}>Show me the data!</button> */}
      </Head>
  );
}

export default Home;