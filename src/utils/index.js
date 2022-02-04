var fistLetterLower = function (str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
export const camelCaseToDash = (str) => {
  return fistLetterLower(str).replace(/([AZ])/g, '-$1').toLocaleLowerCase()
}
export function isExternal (path) {
  return /^(https?:)/.test(path)
}
