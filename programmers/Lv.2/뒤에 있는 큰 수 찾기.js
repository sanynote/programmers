// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 
// 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// 입출력 예1) numbers = [2, 3, 3, 5] result = 	[3, 5, 5, -1]
// 입출력 예2) numbers = [9, 1, 5, 3, 6, 2] result = [-1, 5, 6, 6, -1, -1]


function solution (arr) {
    let newArr = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i])
        newArr.push(arr[i])
    }
    console.log(newArr,'arr')
}

solution([1,2,3,4,5])