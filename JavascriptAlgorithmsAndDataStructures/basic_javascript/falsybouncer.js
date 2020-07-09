function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let trueArray = []
  arr.forEach((elem, index) => {
    if (Boolean(arr[index])) {
      trueArray.push(arr[index])
    }
  })

  // for (let i = 0; i < arr.length; i++) {
  //   if(Boolean(arr[i])){
  //     trueArray.push(arr[i])
  //   }
  // }
  return trueArray
}

//   bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, 'ate', '', false, 9])) //should return [ 7, 'ate', 9 ]
console.log(bouncer(['a', 'b', 'c'])) //should return [ 'a', 'b', 'c' ]
console.log(bouncer([false, null, 0, NaN, undefined, ''])) //should return []
console.log(bouncer([1, null, NaN, 2, undefined])) //should return [1, 2]
