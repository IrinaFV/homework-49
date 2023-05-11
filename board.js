"use strict";
let hash = '';
const size = 8;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        (i + j) % 2 ? hash += '██' : hash += '  ';
    }
    hash += '\n';
}
console.log(hash);
