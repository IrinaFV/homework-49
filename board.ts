let hash: string = ''
const size: number = 8

for (let i: number = 0; i < size; i++) {
  for (let j: number = 0; j < size; j++) {
    (i + j) % 2 ? hash += '██': hash += '  '
  }
  hash += '\n'
}

console.log(hash)