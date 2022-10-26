简介：小型的脚手架工具，是一款主要用于去创建项目中特定类型文件的小工具，类似于Yeoman中的sub generator, 不过它一般不会独立去使用，一般我们会把Plop集成到项目当中

### 一、包的安装和引用

```
npm i plop -D
```
### 二、plop的使用
##### 2.1 在项目根目录创建一个名plopfile.js的文件（必须这个名字）

```
#! /usr/bin/env node
module.exports = plop => {
  // 创建一个plop生成器，第一个参数就是命令的key，后面的使用方式就是 yarn plop component。 第二个参数是对象，为生成器的配置项
  plop.setGenerator('usePlop', {
    description: '使用plop',
    // prompts 就是命令行窗口和开发者交互的内容
    prompts: [
      {
        type: 'input', // 开发者通过输入内容的方式进行交互
        name: 'name', // 用于获取用户输入内容的key
        message: '请输入文件夹名称', // 命令行窗口中询问开发者的语句
        default: 'MyComponent' // componentName对应的默认值
      }
    ],
    // actions开发者在命令行窗口完成交互后，程序最终要做的事情。数组中有几项，那么程序就会做几件事情
    actions: [
      {
        type: 'add', // 程序要新增文件
        path: '{{name}}/example.html', // 新增的文件的目标路径
        templateFile: "generator/example.html" // 新增文件中的内容要来自此处指定的模板内容
      },
      {
        type: 'add', // 程序要新增文件
        path: '{{name}}/example.css', // 新增的文件的目标路径
        templateFile: "generator/example.css" // 新增文件中的内容要来自此处指定的模板内容
      },
       {
        type: 'add', // 程序要新增文件
        path: '{{name}}/example.js', // 新增的文件的目标路径
        templateFile: "generator/example.js" // 新增文件中的内容要来自此处指定的模板内容
      }
    ]
  })
}
```

##### 2.2 文件运行

```
plop
或plop component(对应名称)
如：plop usePlop
```


### 三、Plop的基本原理
#####  3.1 在项目根目录创建一个名princile.js的文件,是对原理的理解

```
#! /usr/bin/env node
//脚手架plop原理
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');

// 工具当前目录
const tmplDir = path.join(__dirname, 'generator');
// 命令行所在目录
const destDir = process.cwd();

module.exports = plop => {
  plop.setGenerator('component', {});
}

//用户交互
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '请输入文件夹名称'
  }
]).then(answer => {
  //获得交互的信息
  const dir=destDir+'/'+answer.name
  //获得母版内容
  fs.readdir(tmplDir, (err, files) => {
    if (err) {
      throw err;
    }
    //遍历母版内容并复制
    files.forEach(file => {
      ejs.renderFile(path.join(tmplDir, file), answer, (err, result) => {
        if (err) {
          throw err;
        }
        exitsFolder(dir)
          .then(res => {
            //复制到指定文件夹（用户交互命令时输入的文件夹名）
            fs.writeFileSync(path.join(dir, file), result);
          })
          .catch(err => {
            console.log(err);
          })

      })
    })
  })
})
async function exitsFolder(reaPath) {
  //如果存在文件夹，就不新建，否则新建
  if (!fs.existsSync(reaPath)){
    fs.mkdir(reaPath, {recursive: true}, err => {
      if (err) throw err;
    });
  }
}
```

### 3.2 调试

```
npm link
npm link plop-cli
```

### 四、新建母版文件

```
generator
    --example.html
    --example.css
    --example.js
```


### 五、 github地址
[https://github.com/T-en1991/usePlop](https://note.youdao.com/)
