export const uniqBy = (arr, fn, obj = {}) => {
  return (
    arr
      .reverse()
      .forEach(
        item => (obj[typeof fn === 'function' ? fn(item) : item[fn]] = item)
      ),
    Object.values(obj)
  )
}
