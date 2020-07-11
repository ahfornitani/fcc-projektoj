function truthCheck(collection, pre) {
  // array to store false
  let arr = []
  for (let user of collection) {
    if (!user[pre]) arr.push(user)
  }

  return arr.length > 0 ? false : true
}

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
) //true

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
) // false
