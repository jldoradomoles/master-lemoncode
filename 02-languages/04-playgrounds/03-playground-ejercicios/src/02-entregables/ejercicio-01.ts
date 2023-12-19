console.log("************** DELIVERABLE 01 *********************");
const list = ['a','b','c','d'];

const head = (list: string[]): string => {
  let [firstElement] = list;
  return firstElement;
};

console.log('Array de entrada-->', list);
console.log('Head function-->', head(list));

const tail = (list: string[]): string[] => {
  let [firstElement, ...rest] = list;
  return rest;
}

console.log('Tail function-->' , tail(list));

const init = (list: string[]): string[] => {
  let results=[];
  list.forEach((item, index) => {
    if(index < list.length - 1){
      results.push(item);
    };
  });
  return results;
}

// Se puede delver lo elementos del array de salida uno a uno...
init(list).forEach(item => console.log('Init fuction-->' ,item));
//... o se puede devolder el array completo
console.log('Init fuction-->' , init(list));

const last = (list: string[]): string => {
  let results;
  list.forEach((item, index) => {
    if(index = list.length + 1){
      results = item;
    };
  });
  return results;
}

console.log('Last function-->', last(list));