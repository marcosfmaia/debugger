const array = [5, 8, 0, 3, 9, 4, 6, 2];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }
}
console.log(array); // Imprimir o array ordenado











