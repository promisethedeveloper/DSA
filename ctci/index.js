function x(str) {
  let hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (hashMap.has(str[i])) {
      return true;
    } else {
      hashMap.set(str[i], i);
    }
  }
  return false;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let hashMap = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (hashMap.has(str1[i])) {
      hashMap.set(str1[i], hashMap.get(str1[i]) + 1);
    } else {
      hashMap.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hashMap.has(str2[i])) {
      hashMap.set(str2[i], hashMap.get(str2[i]) - 1);
      if (hashMap.get(str2[i]) === 0) {
        hashMap.delete(str2[i]);
      }
    } else {
      return false;
    }
  }
  return true;
}

function sortString(str) {
  return str.split("").sort().join("");
}

function checkPermutation2(str1, str2) {
  return sortString(str1) === sortString(str2);
}
