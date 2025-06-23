// Concatenando arrays

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);

// Posso acrescentar mains elementos no array

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2, [7, 8, 9], 'Lucas');
// console.log(array3);

// utilizando o spread operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2, ...[7, 8, 9], 'Lucas'];
// O spread operator permite que você espalhe os elementos de um array dentro de outro array
// Isso é útil para concatenar arrays de forma mais legível e flexível
console.log(array3);
