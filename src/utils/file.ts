import { promises as fs } from 'fs'

export function writeFile(path: string, data: unknown): Promise<void> {
   return fs.writeFile(path, JSON.stringify(data, null, 2))
}
