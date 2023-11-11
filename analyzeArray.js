let arr = [1,8,3,4,2,6];


function average(arr){
  let avg = arr.reduce((prev, current) => {
    return prev + current;
  })
  return (avg/arr.length);
}

function findMin(arr){
  let min = arr[0];
  for(let i = 0 ; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
    }
  }
  return min;
  
}

function findMax(arr){
  let max = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

function analyzeArr(arr){
  let min = findMin(arr);
  return {
    "average": average(arr),
    "min": min,
    "max": findMax(arr),
    "length": arr.length
  };
}

module.exports = analyzeArr;