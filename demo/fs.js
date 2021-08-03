// File System
const fs = require('fs')
const path = require('path')

/*
fs.mkdir(path.join(__dirname, 'test'), (err) =>{
    if (err) {
        throw err;
    }
    console.log('Folder was created')
})*/

const filePath = path.join(__dirname, 'test', 'text.txt')
/*fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
    if (err) {
        throw err;
    }
    console.log('File was created')

    fs.appendFile(filePath, '\nHello again', (err) => {
        if (err) {
            throw err;
        }
        console.log('File was created')
    })
})*/
fs.readFile(filePath, 'utf-8' ,(err, content) =>{
    if (err){
        throw err;
    }

    console.log(content)
   /* const data = Buffer.from(content)
    console.log('Content: ', data.toString())*/
})
