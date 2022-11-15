简介：Json-templater 是字符串模板生成器。使用时，定义字符串模板，在需要的地方进行插值（同vue一样{{}}写法），在调用生成器时传入变量即可生成模板，在前端工程化脚本中经常能被使用到

### 一、包的安装和引用

```
npm install json-templater
```

### 二、fs-extra的常见用法
#### 2.1 json-templater/string

```
var render = require('json-templater/string');
render('{{xfoo}} {{say.what}}', { xfoo: 'yep', say: { what: 'yep' } });
```
#### 2.2 应用示例
将模板字符串生成到一个文件夹中
```
var render = require('json-templater/string');
var fs = require('fs');
var path = require('path');


var OUTPUT_PATH = path.join(__dirname, './text.js');

var strs = `const a={
"姓名":"{{name}}",
"年龄":"{{age}}",
"爱好":"{{hobby.coding}}、{{hobby.writing}}",
"其他":"{{others}}"
}`;
var template = render(strs, {
  name: '橙某人',
  age: 18,
  hobby: {
    coding: '写代码',
    writing: '写文章',
  },
  others: ['var a = 1;', 'var b = 2;', 'var c = 3;'].join() // 数组变字符串并加换行符
});
fs.writeFileSync(OUTPUT_PATH, template);

```


### 三、链接地址
[github参考代码](https://github.com/T-en1991/usePackages/tree/main/useJson-templater)
