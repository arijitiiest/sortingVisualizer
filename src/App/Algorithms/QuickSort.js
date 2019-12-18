const getQuickSortAnimation = array => {
    if (array.length <= 1) return;
    const animation = [];
    quickSort(array, 0, array.length-1, animation);
    return animation;
}

function quickSort(array, low, high, animation) {
    if (low < high) {
        const pi = partition(array, low, high, animation);

        quickSort(array, low, pi-1, animation);
        quickSort(array, pi+1, high, animation);
    }
}

function partition(array, low, high, animation) {
    const pivot = array[high];
    let i = low-1;

    for (let j=low; j<high; j++) {
        if (array[j] < pivot) {
            i++;
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            animation.push([i, j]);
            animation.push([i, j]);
            animation.push([i, array[i]]);
            animation.push([j, array[j]]);
        }
    }

    const temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    animation.push([i+1, high]);
    animation.push([i+1, high]);
    animation.push([i+1, array[i+1]]);
    animation.push([high, array[high]]);
    return (i+1);
}

export default getQuickSortAnimation;