import React, { Component } from 'react';
import Slider from 'react-input-slider';

import './button.css';

class ArrayModificationButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            x: 100,
            disabled: ""
        }
        this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
        this.newArrayHandler = this.newArrayHandler.bind(this);
    }
    
    sliderChangeHandler(e) {
        if (!this.props.run)
            this.setState({ x: e.x }, () => this.props.changeArraySize(this.state.x))
    }

    newArrayHandler() {
        if (!this.props.run)
            this.setState({ x: this.state.x }, () => this.props.changeArraySize(this.state.x))
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.run) {
            this.setState({ disabled: "disabled" });
        } else {
            this.setState({ disabled: "" });
        }
    }

    render() {
        return(
            <div className="arrayButton">
                <button onClick={this.newArrayHandler} className={this.state.disabled}>Generate New Array</button>

                <div style={{marginBottom: "10px", border: "2px solid #403d6b", padding: "10px", color: "#403d6b"}}>No of Bars: {'x: ' + this.state.x}</div>
                <Slider
                    axis="x"
                    xstep={1}
                    xmin={5}
                    xmax={200}
                    x={this.state.x}
                    onChange={this.sliderChangeHandler}
                    styles={{
                        track: {
                        backgroundColor: '#bfb6e3'
                        },
                        active: {
                        backgroundColor: '#403d6b'
                        },
                        thumb: {
                        width: 25,
                        height: 25
                        },
                        disabled: {
                        opacity: 0.5
                        }
                    }}
                />
            </div>
        )
    }
}


export default ArrayModificationButton;