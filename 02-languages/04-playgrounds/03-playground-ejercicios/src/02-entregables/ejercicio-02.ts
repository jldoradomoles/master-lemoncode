console.log("************** DELIVERABLE 02 *********************");

const colors = ['red', 'yellow', 'blue', 'violet', 'white'];
const animals = ['horse', 'cat', 'dog', 'bird', 'fish'];
const numbers = [1,2,3,4,5];

const concat = (listA: string[], listB: string[], ...rest) => {
    let mergeList;
    let restList=[];
    if(rest){
        rest.forEach(item => restList = restList.concat(item));
        mergeList = [...listA, ...listB, ...restList];
    } else {
       mergeList = [...listA, ...listB];
    }
    return mergeList
}


// Funcion concat con 2 arrays
console.log('Concat function -->' , concat(colors, animals));
// Funcion concat con mas de un array
console.log('Concat function -->' , concat(colors, animals, numbers, [87,78,45,23]));
