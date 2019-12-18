const getHeapSortAnimation = array => {
    if (array.length <= 1) return;
    const animation = [];
    heapSort(array, animation);
    return animation;
}

function heapSort(array, animation) {
    const n = array.length;
    for (let i=Math.floor(n/2)-1; i>=0; i--) {
        heapify(array, n, i, animation);
    }

    for (let i=n-1; i>=0; i--) {
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        animation.push([0, i]);
        animation.push([0, i]);
        animation.push([0, array[0]]);
        animation.push([i, array[i]]);

        heapify(array, i, 0, animation);
    }
}

function heapify(array, n, i, animation) {
    let largest = i;
    let l = 2*i+1;
    let r = 2*i+2;

    if (l<n && array[l]>array[largest]) largest = l;

    if (r<n && array[r]>array[largest]) largest = r;    

    if (largest !== i) {
        const temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        animation.push([i, largest]);
        animation.push([i, largest]);
        animation.push([i, array[i]]);
        animation.push([largest, array[largest]]);

        heapify(array, n, largest, animation);
    }
}

export default getHeapSortAnimation;