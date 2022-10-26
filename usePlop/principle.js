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
