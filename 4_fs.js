const fs=require('fs')
let folderPath='C:\\Users\\Personal\\Desktop\\NoudYiEs'
let folderContent=fs.readdirSync(folderPath)
console.log('Content: ',folderContent)
//fs.mkdirSync('myDirectory')