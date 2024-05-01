const num: number = 5;
const num2: number = 5;

const sum = (a: number, b: number): number => {
  return a + b;
};  

console.log(sum(num, num2));

interface IPerson {
  name: string;
  age: number;
}


const diego: IPerson = {
    name: 'Diego',
    age: 30
}

diego 