import React from 'react'
import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components'
import {flipInY} from 'react-animations'

const flipAnim = keyframes`${flipInY}`

let test = `1000ms`

const CardDiv = styled.div`
    animation-duration: ${test};
    animation-name: ${flipAnim};
    background: url('../img/pancake.png');
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -130px;
    padding: 0 15px;
    width: 240px;
    height: 216px;
    z-index: 10;
    text-align: center;
    text-shadow: 2px 2px 3px black;
    /* background-color: white; */
    /* border: 1px solid grey; */
    /* border-radius: 5px; */
    font-size: 18px;
    color: white;
    /* border-top: 1px solid red; */
    span{ 
        font-weight: bold;
        color: #41dae0;
    }
    p{
        margin-top: 80px;
    }
    transition: transform 300ms ease-in-out;
    &:hover{
        transform: scale(1.2);
    }

`

const Card = (props) => {

    test = `${props.id}ms`

    return(
        <>
        <Link to={`/user/${props.id}`}>
        <CardDiv>
            <p>{props.name}</p>
        </CardDiv>
        </Link>
        </>
    )
}

export default Card