function mutation(arr) {
  let sortedArrayFromFirst = arr[0].toLowerCase().split('').sort()
  let sortedArrayFromSecond = arr[1].toLowerCase().split('').sort()

  for (let i of sortedArrayFromSecond) {
    if (!sortedArrayFromFirst.includes(i)) {
      return false
    }
  }
  return true
}

mutation(['hello', 'hey'])
