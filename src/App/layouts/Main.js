import React from 'react';

import './Main.css';
import Nav from '../components/Nav/Nav';
import AlgorithmsButton from '../components/Buttons/AlgorithmsButton';
import Container from '../components/Container/Container';
import ArrayModificationButton from '../components/Buttons/ArrayModificationButton';

const Main = props => (
    <div>
        <Nav />
        <div className="body">
            <ArrayModificationButton changeArraySize={props.changeArraySize} run={props.run} /> 
            <Container array={props.array} run={props.run} algo={props.algo} stopAnimation={props.stopAnimation} copyArray={props.copyArray} />
            <AlgorithmsButton selectAlgo={props.selectAlgo} run={props.run} />
        </div>
        <div className="play">
            <button onClick={props.startAnimation}>Start {props.algo}</button>
        </div>
    </div>
)

export default Main;