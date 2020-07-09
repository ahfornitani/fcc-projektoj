function titleCase(str) {
  let stringCapitalized = str
  stringCapitalized = stringCapitalized
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
  console.log(stringCapitalized)
  return stringCapitalized
}
titleCase("I'm a little tea pot")
titleCase('бабушка курит трубку località àtilacol')
