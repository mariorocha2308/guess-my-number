export function shuffle(array: number[] = [1,2,3,4,5,6,7,8,9]) {
  var i = array.length,
  j = 0,
  temp;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array.slice(0,4);
}