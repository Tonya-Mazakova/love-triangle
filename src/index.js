/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let length = preferences.length,
        count = 0,
        firstValue,firstIndex,
        secondIndex, secondValue,
        thirdIndex, thirdValue;
    if(length < 3){
        return count;
    }
    let arrIndex=[];
    for( let i = 0;i < length;){
        firstIndex = i;
        firstValue = preferences[i];
        secondIndex = firstValue-1;
        secondValue = preferences[secondIndex];
        thirdIndex = secondValue-1;
        thirdValue = preferences[thirdIndex];

        if(arrIndex.indexOf(firstIndex)===-1 & arrIndex.indexOf(secondIndex)===-1 & arrIndex.indexOf(thirdIndex)===-1
            & secondValue !== firstIndex+1 & firstValue !== (firstIndex+1)
            & secondValue !== (secondIndex+1) & thirdValue === (firstIndex+1)){
            count+=1;
            arrIndex.push(firstIndex);
            arrIndex.push(secondIndex);
            arrIndex.push(thirdIndex);
            i++;
            if(preferences[i] == null){
                return count;
            }
        } else{
            i++;
            if(preferences[i] == null){
                return count;
            }
        }
    }
    return count;
};
