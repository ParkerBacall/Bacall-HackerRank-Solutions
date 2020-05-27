//2d array -DS
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let highestSum = -9999999
    for (let i=0; i<arr.length-1; i++){
        for (let j=0; j<arr.length-1; j++){
             arr[i][j]
            if (i >= arr.length - 2 || j >= arr.length - 2){
            }else{
                let sum = 0 
                const row1 = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                const row2 = arr[i+1][j+1]
                const row3 = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
                sum = row1+row2+row3
                    if (sum > highestSum){
                        highestSum = sum
                    }
            }
        }
    }
    return highestSum
}

//New Year Chaos
// Complete the minimumBribes function below.
function minimumBribes(q) {
    let count = 0

    for(let i = 0; i < q.length; i++){ 
        const original_pos = q[i] - 1;
        const diff = original_pos - i;

        if(diff > 2) return console.log("Too chaotic");

            for(let j = Math.max(0, original_pos - 1); j < i; j++){ 
                const start_pos_of_forward_person = q[j] - 1;
                if(start_pos_of_forward_person > original_pos){
                    count++;
                }
            }
        }
    

    return count; 

}

//mimimum swaps 2
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let totalSwapCount = 0 
    for (let index = 0; index<arr.length; index++){
        totalSwapCount += swapChain(arr, index) 
    }
    return totalSwapCount
}

function swapChain(arr, index){
    let swapCount =0
    let current = arr[index] // current value at index
    let target = arr[current - 1] //spot in array where that value should at index should be
    while (current !== target){
       arr[index] = target //cet current index to the target value
       arr[current - 1] = current //swap index to the current index value

        swapCount += 1 // imcrement swap count
        
        current = target //reset values so loop can run again
        target = arr[current -1]

    }
    return swapCount
}