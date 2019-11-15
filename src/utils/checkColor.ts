export default function checkColor(input) {
  const reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
  return reg.test(input)
}
