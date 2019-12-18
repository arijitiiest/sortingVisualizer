import React, { Component } from 'react';

import Main from '../layouts/Main';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            arraySize: 100,
            algo: '',
            run: false
        };
        this.changeArraySize = this.changeArraySize.bind(this);
        this.selectAlgo = this.selectAlgo.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.copyArray = this.copyArray.bind(this);
    }

    generateNewArray() {
        const array = [];
        for (let i=0; i<this.state.arraySize; i++) {
            array.push(randomNumber(5, 720));
        }
        this.setState({array});
    }

    changeArraySize(size) {
        this.setState({arraySize: size}, () => this.generateNewArray());
    }

    selectAlgo(algo) {
        this.setState({ algo: algo })
    }

    startAnimation() {
        if (!this.state.run)
            this.setState({ run: true });
    }

    stopAnimation() {
        if (this.state.run)
            this.setState({ run: false })
    }

    copyArray(array) {
        this.setState({array})
    }

    componentDidMount() {
        this.generateNewArray();
    }

    render() {
        return(
            <Main 
                array={this.state.array} 
                changeArraySize={this.changeArraySize} 
                selectAlgo={this.selectAlgo} 
                algo={this.state.algo}
                run={this.state.run}
                startAnimation={this.startAnimation}
                stopAnimation={this.stopAnimation}
                setArray={this.setArray}
                copyArray={this.copyArray}
                />
        );
    }
}

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SortingVisualizer;