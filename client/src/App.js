import React, {useState} from 'react';
import { Route } from "react-router-dom";
import {useFetchData} from './hooks/useFetchData'

import Header from './components/Header'

import Projects from './components/Projects'
import Project from './components/Project'

import styled from 'styled-components'
import './App.css';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

function App() {

  const [projects] = useFetchData([])

  console.log(projects)

  return (
    <>
      <Header />
      {/* <Route exact path="/" component={Home} /> */}
      <Route path ='/projects' render={props => {
        return <Projects {...props} projects={projects} />}} />
      <Route path ='/project/:id' render={props => {
        return <Project {...props} projects={projects} />}} />
    </>
  );
}

export default App;