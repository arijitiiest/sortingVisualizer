import React from 'react';

import './button.css';
import algorithms from '../../data/algorithms';



const AlgorithmsButton = props => {
    const onClickHandler = (e) => {
        if (!props.run)
            props.selectAlgo(e.target.name);
    }
    
    let disabled = "";
    if (props.run) {
        disabled = "disabled";
    } else {
        disabled = "";
    }

    const button = algorithms.map((data, idx) => (
        <button key={idx} name={data.label} onClick={onClickHandler} className={disabled} >{data.label}</button>
    ));

    return(
        <div className="algoButton">
            {button}
        </div>
        
    )
}

export default AlgorithmsButton;