import * as fs from 'fs'

export async function writeFile(path: string, data: unknown) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data, null, 2), err =>
      err ? reject(err) : resolve()
    )
  })
}
