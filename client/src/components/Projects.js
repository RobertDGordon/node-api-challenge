import React, { useEffect, useState } from "react";

import Card from './Card';

import '../App.css';

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  #plate{
      position: absolute;
      bottom: 175px;
      z-index: 0;
  }
`

const SearchBar = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    /* margin-bottom: 100px; */
    width: 620px;
    height: 10px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }    
    input{
      margin: 10px 5px;
      border-left: 1px solid black;
    }
    label{
      margin: 0 10px;
    }
    button{
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      background-color: darkgrey;
    }
`

const UserCards = styled.section`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 650px;
  margin-top: 130px;
  position: absolute;
  bottom: 200px;
  z-index: 1;
`

function Users(props) {

  const [users, setusers] = useState([]);

  const [srch, setSrch] = useState({name:" ", status:" "});

  const [searchNow, setSearchNow] = useState ({});

  let [page, setPage] = useState (0);

  const [pages, setPages] = useState(0)

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };


    const handleSubmit = event => {
        event.preventDefault();
        setSearchNow(srch)
        console.log (srch.name, srch.status);
      }

  return (
    <Main>
      <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Project Id:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <button>Stack 'em</button>
        </form>
      </SearchBar>
      <div id='plate'>
        <img src='../img/plate.png' alt='plate'/>
      </div>
      <UserCards>
      {props.projects.map (user => (
        <Card key={user.id} name={user.name} id={user.id} {...user}/>
      ))}
    </UserCards>

    </Main>
  );
}

export default Users;