import React from 'react';

import './Container.css';
import MergeSortAnimation from '../../Algorithms/MergeSort';
import BubbleSortAnimation from '../../Algorithms/BubbleSort';
import QuickSortAnimation from '../../Algorithms/QuickSort';
import HeapSortAnimation from '../../Algorithms/HeapSort';

const ANIMATION_SPEED = 5;
const PRIMARY_COLOR = '#2056b3';
const SECONDARY_COLOR = 'red';

const Container = props => {
    let run = props.run;
    if(run) {
        let algorithm = props.algo;
        let array = props.array;
        const arrayCopy = array.slice();
        let animation = [];
        switch (algorithm) {
            case 'Merge Sort': animation = MergeSortAnimation(arrayCopy); break;

            case 'Bubble Sort': animation = BubbleSortAnimation(arrayCopy); break;

            case 'Quick Sort': animation = QuickSortAnimation(arrayCopy); break;

            case 'Heap Sort': animation = HeapSortAnimation(arrayCopy); break;

            default: console.log('No animation')
        }

        for (let i=0; i<animation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i%4 === 0) {
                const [barOneId, barTwoId] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED);
            } else if (i%4 === 1) {
                const [barOneId, barTwoId] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED);
            }
            else {
                const [barOneId, newHeight] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.margin = `${730 - newHeight}px ${10/props.array.length}% auto`
                }, i * ANIMATION_SPEED);
            }
        }

        setTimeout(() => {
            props.stopAnimation();
            props.copyArray(arrayCopy);
        }, animation.length * ANIMATION_SPEED)
        
    }

    return(
        <div className="container">
            <div className="array-bars">
                {props.array.map((value, idx) => (
                    <div 
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                            width: `${80/props.array.length}%`,
                            margin: `${730 - value}px ${10/props.array.length}% auto`
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Container;