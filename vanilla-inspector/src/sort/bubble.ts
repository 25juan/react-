function bubble(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j<arr.length ; j++) {
      const num1 = arr[i];
      const num2 = arr[j];
      if(num1 < num2) {
        arr[j] = num1;
        arr[i] = num2;
      }
    }
  }
  return arr;
}
bubble([26,1,2,231,12,3,5]);
