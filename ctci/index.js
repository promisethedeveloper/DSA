function isUnique(str) {
  let hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (hashMap.has(str[i])) {
      return false;
    } else {
      hashMap.set(str[i], i);
    }
  }

  return true;
}

function checkPalindrome(s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }
  return true;
}

function checkForTarget(arr, t) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let currSum = arr[leftPointer] + arr[rightPointer];
    if (currSum === t) {
      return true;
    } else if (currSum > t) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return false;
}

function combine(arr1, arr2) {
  let arrOnePointer = 0;
  let arrTwoPointer = 0;
  let answerArray = [];

  while (arrOnePointer < arr1.length && arrTwoPointer < arr2.length) {
    let arrOneElem = arr1[arrOnePointer];
    let arrTwoElem = arr2[arrTwoPointer];

    if (arrOneElem < arrTwoElem) {
      answerArray.push(arrOneElem);
      arrOnePointer++;
    } else if (arrTwoElem < arrOneElem) {
      answerArray.push(arrTwoElem);
      arrTwoPointer++;
    } else {
      answerArray.push(arrOneElem);
      arrOnePointer++;
    }
  }

  while (arrOnePointer < arr1.length) {
    answerArray.push(arr1[arrOnePointer]);
    arrOnePointer++;
  }
  while (arrTwoPointer < arr2.length) {
    answerArray.push(arr2[arrTwoPointer]);
    arrTwoPointer++;
  }
  return answerArray;
}

function isSequence(s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
}

var reverseString = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    let holdValue = s[leftPointer];
    s[leftPointer] = s[rightPointer];
    s[rightPointer] = holdValue;
    leftPointer++;
    rightPointer--;
  }
};

function sortedSquare(nums) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let lastIndex = nums.length - 1;
  let answerArr = [];

  while (leftIndex <= rightIndex) {
    let leftValue = nums[leftIndex] * nums[leftIndex];
    let rightValue = nums[rightIndex] * nums[rightIndex];

    if (leftValue > rightValue) {
      answerArr[lastIndex] = leftValue;
      leftIndex++;
    } else {
      answerArr[lastIndex] = rightValue;
      rightIndex--;
    }
    lastIndex--;
  }
  return answerArr;
}

function checkLength(nums, k) {
  let leftIndex = 0;
  let currentSum = 0;
  let answer = 0;
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    currentSum += nums[rightIndex];

    while (currentSum > k) {
      currentSum -= nums[leftIndex];
      leftIndex++;

      answer = Math.max(answer, rightIndex - leftIndex + 1);
    }
  }
  return answer;
}

function findLength(s) {
  let leftIndex = 0;
  let curr = 0;
  let answer = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    if (s[rightIndex] == "0") {
      curr++;
    }

    while (curr > 1) {
      if (s[leftIndex] == "0") {
        curr--;
      }
      leftIndex++;
    }
    answer = Math.max(answer, rightIndex - leftIndex + 1);
  }

  return answer;
}
