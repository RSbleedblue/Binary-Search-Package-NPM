const binarySearch = (arr,target) => {
    arr.sort((a,b) => a-b)
    console.log("Sorted array: ",arr);
    let i = 0;
    let j = arr.length - 1
    while(i <= j){
        let mid = Math.floor((i + j) / 2)
        if(target === arr[mid]){
            return mid+1
        }
        else if(target > arr[mid]){
            i = mid+1;
        }
        else{
            j = mid - 1;
        }
    }
    return null;
}
