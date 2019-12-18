const getBubbleSortAnimation = array => {
    if (array.length <= 1) return array;
    const animation = [];
    bubbleSort(array, animation);
    console.log(animation);
    return animation;
}

function bubbleSort(array, animation) {
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length-i-1; j++) {
            if(array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animation.push([j, j+1]);
                animation.push([j, j+1]);
                animation.push([j, array[j]]);
                animation.push([j+1, array[j+1]]);
            }
        }
    }
}

export default getBubbleSortAnimation;