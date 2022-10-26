简介：用于改变console输出的样式
### 一、包的安装和引用

```
// 包的下载
npm i chalk 
// 包的引入
import chalk from 'chalk'
```

### 二、代码演示

```
const chalk = require("chalk");
const log = console.log;

log(chalk.red("sea"));  // 字体颜色
log(chalk.bgGreen("Forest")); // 背景色
log(chalk.bold.underline.bgYellow.red("WARNING!")); 
```


### 五、全部代码参考
[github参考代码](https://github.com/T-en1991/usePackages/useChalk)
