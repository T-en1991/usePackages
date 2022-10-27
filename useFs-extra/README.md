简介：fs-extra 是fs 的扩展，继承了 fs 所有方法并为这些方法添加了 promise 语法

### 一、包的安装和引用

```
npm install fs-extra
```

### 二、fs-extra的常用api
#### 2.1 copy()
复制文件或目录，目录可以包含内容
```
copy(src:string, dest:string, [options:object, callback:function])
```
```
// 复制文件
fse.copy('old.txt', 'new.txt', err => {
  if (err) throw err
  console.log('success')
})
// 复制目录，目录可以包含内容
fse.copy('utils', 'newutils', err => {
  if (err) throw err
  console.log('success')
})
// promise 
fse.copy('utils', 'newutils')
.then(() => {
    console.log('success')
})
.catch(err => {
    console.log(err)
})
// async/await
async function test () {
    try {
        await fse.copy('utils', 'newutils')
        console.log('success')
    } catch (err) {
        console.log(err)
    }
}
test()
```
#### 2.2 emptyDir()
确保目录为空，如果目录不为空，则删除目录内容。如果该目录不存在，则创建该目录。目录本身不会被删除

```
emptyDir(dir:string, [callback:function])
```

```
fse.emptyDir('./emptyDir',err=>{
  if (err) throw err;
  console.log(12)
})
```
#### 2.3 ensureFile
确保文件存在，如果请求创建的文件位于不存在的目录中，则会创建这些目录。如果该文件已存在，则不进行修改

```
ensureFile(file:string, [callback:func])
```


```
fse.ensureFile('./ensureFile/test.js',err=>{
  if(err) throw err;
  console.log('success!')
})
```
#### 2.4 ensureDir()
如果目录结构不存在，则创建它，如果目录存在，则不进行创建


```
ensureDir(dir:string, [callback:func])
```

```
fse.ensureDir('newutil', err => {
  if (err) throw err
  console.log('success')
})
```

#### 2.5 move()
移动文件或目录

```
move(src:string, dest:string, [options:object, callback:func])
```

```
fse.move('newutils/seq.js', 'newutil/seq.js', err => {
  if (err) throw err
  console.log('success')
})
```
#### 2.6 outputFile()
写入文件数据，如果父级目录不存在，则创建它。file 必须是文件路径，不允许使用缓冲区或文件描述符

```
outputFile(file:string, data:string|Buffer|Uint8Array, [options:String|object, callback:func])
```

```
fse.outputFile('newutil/seq.js', 'hello, Node.js', err => {
  if (err) throw err
  console.log('success')
})
```
#### 2.7 outputJson()
写入JSON 文件 JSON 数据，默认 w 模式，会覆盖文件原有内容；如果目录不存在，会被创建

```
outputJson(file:string, object:object, [options:object, callback:func])
```

```
fse.outputJson('newutil/seq.json', { name: 'duli' }, err => {
  if (err) throw err
  console.log('success')
})
```
#### 2.8 writeJson()
将对象写入 JSON 文件，几乎与 outputJson 相同，除了必须保证目录存在外

```
writeJson(file, object, [options, callback])
```

```
fse.writeJSON('newutil/seq.json', { name: 'cc' }, err => {
  if (err) throw err
  console.log('success')
})
```
#### 2.9 pathExists()
检查文件系统来测试给定路径是否存在

```
pathExists(file:string, [, callback:func])
```

```
fse.pathExists('newutil/seq.js', (err, exists) => {
  if (err) throw err
  console.log(exists)
})
```

#### 2.10 readJson()
读取 JSON 文件，然后将其解析为对象

```
readJson(file:string, [options:object, callback:func])
```


```
fse.readJson('newutil/seq.json', (err, obj) => {
  if (err) throw err
  console.log(obj)
  console.log(typeof obj)
})
```


#### 2.11 remove()
删除文件或目录，该目录可以包含内容

```
remove(path:String, [callback:func])
```


```
fse.remove('new.txt', err => {
  if (err) throw err
  console.log('success')
})
```
### 三、链接地址
[github参考代码](https://github.com/T-en1991/usePackages/tree/main/useFs-extra)
