const addTwo = num => {
    return num + 2;
  }

const addThree = num => {
    return num + 5 + 3;
}


const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';
}
console.log(checkConsistentOutput(addTwo, 2));
console.log(checkConsistentOutput(addThree, 5));