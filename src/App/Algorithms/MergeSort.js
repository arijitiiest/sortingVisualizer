const getMergeSortAnimation = array => {
    if (array.length <= 1) return array;
    const animation = [];
    const anotherArray = array.slice();
    mergeSort(array, 0, array.length-1, anotherArray, animation);
    return animation;
}

function mergeSort(array, l, r, anotherArray, animation) {
    if (l === r) return;
    const m = Math.floor((l+r)/2);

    mergeSort(anotherArray, l, m, array, animation);
    mergeSort(anotherArray, m+1, r, array, animation);

    doMerge(array, l, m, r, anotherArray, animation);
}

function doMerge(array, l, m, r, anotherArray, animation) {
    let k = l;
    let i = l;
    let j = m+1;

    while(i <= m && j <= r) {
        animation.push([i, j]);
        animation.push([i, j]);
        if(anotherArray[i] <= anotherArray[j]) {
            animation.push([k, anotherArray[i]]);
            animation.push([k, anotherArray[i]]);
            array[k++] = anotherArray[i++];
        } else {
            animation.push([k, anotherArray[j]]);
            animation.push([k, anotherArray[j]]);
            array[k++] = anotherArray[j++];
        }
    }
    while (i <= m) {
        animation.push([i, i]);
        animation.push([i, i]);
        animation.push([k, anotherArray[i]]);
        animation.push([k, anotherArray[i]]);
        array[k++] = anotherArray[i++];
    }
    while (j <= r) {
        animation.push([j, j]);
        animation.push([j, j]);
        animation.push([k, anotherArray[j]]);
        animation.push([k, anotherArray[j]]);
        array[k++] = anotherArray[j++];
    }
}


export default getMergeSortAnimation;