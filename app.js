var arr = [1,2];

var n = 1;

function fibonacci(a,b) {
  if(9 > n) {
    arr.push(a + b);
    n++;
    return fibonacci(arr[arr.length-2],arr[arr.length-1]); 
  }
  return arr;
}

fibonacci(arr[0],arr[1]);