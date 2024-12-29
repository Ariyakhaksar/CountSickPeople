import OptimizeSickCount from "./components/OptimizeSickCount";

const Cip = Array.from({ length: 100000 }, (_, i) => i + 1);
const D = [50000, 100000, 150000];

const result = OptimizeSickCount(Cip, D);
console.log(result)

for(let i = 0; i < 10; i++){
    console.log(Cip[i])
}