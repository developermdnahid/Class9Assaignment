const devs = [
    {
        id : 1,
        name : 'MD Nazrul Islam Nahid',
        age : 21,
        skill : 'MERN Stack Web Developer'
    },
    {
        id : 2,
        name : 'Mahbub',
        age : 15,
        skill : 'BlackChain Developer'
    },
    {
        id : 3,
        name : 'Sabbir Hosain',
        age : 25,
        skill : 'IOS Developer'
    },
    {
        id : 4,
        name : 'MD Nazrul Islam Nahid',
        age : 21,
        skill : 'MERN Stack Web Developer'
    },
    {
        id : 5,
        name : 'Asa Alam',
        age : 27,
        skill : 'Web Developer'
    },
];

let data = `[{"id":1,"name":"MD Nazrul Islam Nahid","age":21,"skill":"MERN Stack Web Developer"},{"id":2,"name":"Mahbub","age":15,"skill":"BlackChain Developer"},{"id":3,"name":"Sabbir Hosain","age":25,"skill":"IOS Developer"},{"id":4,"name":"MD Nazrul Islam Nahid","age":21,"skill":"MERN Stack Web Developer"},{"id":5,"name":"Asa Alam","age":27,"skill":"Web Developer"}]`;
console.log(devs);
console.log(JSON.stringify(devs));
console.log(JSON.parse(data));