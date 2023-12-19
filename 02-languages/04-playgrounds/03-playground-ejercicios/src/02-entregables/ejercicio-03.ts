console.log("************** DELIVERABLE 03 *********************");

const user = {
    name: 'Jose',
    aged: 42,
    rol: 'develop',
    city: 'Malaga',
};


function clone(user: object) {
    const userObjet = {...user};
    return userObjet
};


console.log('Clone function --->', clone(user));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


function merge(userA: object, userB: object) {
    const finalUser = {...userA, ...userB};
    return finalUser;
};


console.log('Merge function-->', merge(a,b));

