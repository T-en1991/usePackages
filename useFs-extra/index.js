const fse = require('fs-extra')

//复制.copy
/*fse.copy('./fromTest.txt', './toTest.txt')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))*/

//确保目录为空，如果目录不为空，则删除目录内容。如果该目录不存在，则创建该目录。目录本身不会被删除
/*fse.emptyDir('./emptyDir',err=>{
  if (err) throw err;
  console.log(12)
})*/

//确保文件存在，如果请求创建的文件位于不存在的目录中，则会创建这些目录。如果该文件已存在，则不进行修改
/*
fse.ensureFile('./ensureFile/test.js',err=>{
  if(err) throw err;
  console.log('success!')
})
*/


//如果目录结构不存在，则创建它，如果目录存在，则不进行创建
/*fse.ensureDir('./ensureDir',err => {
  if (err) throw err
  console.log('success')
})*/

//移动文件或目录
/*fse.move('./seq.js', './seq.js', err => {
  if (err) throw err
  console.log('success')
})*/


//写入文件数据，如果父级目录不存在，则创建它。file 必须是文件路径，不允许使用缓冲区或文件描述符
/*fse.outputFile('newutil/seq.js', 'hello, Node.js', err => {
  if (err) throw err
  console.log('success')
})*/

//写入JSON 文件 JSON 数据，默认 w 模式，会覆盖文件原有内容；如果目录不存在，会被创建
/*
fse.outputJson('newutil/seq.json', { name: 'duli' }, err => {
  if (err) throw err
  console.log('success')
})*/

//将对象写入 JSON 文件，几乎与 outputJson 相同，除了必须保证目录存在外
/*
fse.writeJSON('newutil/seq.json', { name: 'cc' }, err => {
  if (err) throw err
  console.log('success')
})*/

//检查文件系统来测试给定路径是否存在
/*fse.pathExists('newutil/seq.js', (err, exists) => {
  if (err) throw err
  console.log(exists)
})*/

//读取 JSON 文件，然后将其解析为对象
/*
fse.readJson('newutil/seq.json', (err, obj) => {
  if (err) throw err
  console.log(obj)
  console.log(typeof obj)
})*/

//删除文件或目录，该目录可以包含内容
/*
fse.remove('new.txt', err => {
  if (err) throw err
  console.log('success')
})*/
