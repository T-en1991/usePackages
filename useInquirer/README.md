简介：inquirer，node交互命令，用于获取用户在终端输入的node交互命令
### 一、包的安装和引用

```
// 包的下载
npm i inquirer -D 
// 包的引入
var inquirer=require('inquirer')
//在运行的时候可能会报Must use import to load ES Module错误，请将版本切换为7.3.3再试
```

### 二、参数详解

```
//a是一个数组，他的配置规则是一个对象
inquirer.prompt(a)
```


| 数组对象的键 | 数组对象的 |
| --- | --- |
| 值 | typeinput、number、confirm、list、rawlist、expand、checkbox、password、editor |
| name | 最后输出全部答案时的键 |
| message | 问题描述 |
| default | 问题的默认值 |
| choice | 问题选项 |
| validate | 回答的校验器 |
| filter | 回答的过滤器 |
| transformer | 接收用户输入，回答散列和选项标志，并返回一个转换后的值显示给用户 |
| when | 是否应该问这个问题 |
| pageSize | 控制选项显示的个数，就是是否当前最多显示多少个选项，如果超过则需要向下才能显示更多 |
| prefix | 更改默认的前缀消息 |
| suffix | 更改默认后缀消息askAnswered如果答案已经存在，就必须提出问题 |
| loop | 是否启用列表循环 |


### 三、代码演示

```
//这是可运行代码
var inquirer=require('inquirer')
// import inquirer from 'inquirer'
inquirer.prompt([
  {
    type:'input',
    name:'firstName',
    message:'请输入用户名message',
    default:'admin',
    validate:(answer)=>{
      console.log('请输入名字validate')
      console.log(answer);
      return true
    },
    filter:(val)=>{
      return val.toLowerCase();
    }
  },
  {
    type:'password',
    name:'psw',
    message:'请输入密码',
    default:'请输入密码',
    validate:(answer)=>{
      console.log('请输入密码')
      console.log(answer);
      return true
    },
    filter:(val)=>{
      return val.toLowerCase();
    }
  },
  {
    type:'number',
    name:'num',
    message:'请输入数字',
    default:0,
  },
   {
    type:'confirm',
    name:'这是确认会话',
    message:'确定创建吗',
    default:false,
  },
  {
    type:'rawlist',
    name:'rawlist',
    message:'这是有序列表',
    choices: ['rawlist1', 'rawlist2'],
  },
  {
    type:'list',
    name:'list',
    message:'这是无序列表',
    choices: ['list1', 'list2'],
  },
  {
    type:'checkbox',
    name:'checkbox',
    message:'这是勾选型checkbox',
    choices: ['checkbox1', 'checkbox2'],
  },
  {
    type:'editor',
    name:'editor',
    message:'这是在commond中编辑内容'
  },
  {
    type: 'expand',
    name: 'expand',
    message: 'expand扩展',
    default: 'red',
    choices: [
      { key: 'R', value: 'red' },
      { key: 'G', value: 'green' },
      { key: 'B', value: 'blue' },
    ]
  },
])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {console.log(error);} )
```

### 四、模仿vuecli创建项目时的命令交互

```
var inquirer=require('inquirer')
// import inquirer from 'inquirer'

inquirer.prompt([
  {
    type:'list',
    message:'Please pick a preset:',
    name:'item',
    default:'command ([Vue 2] babel, router, vuex, eslint)',
    choices:[
      'command ([Vue 2] babel, router, vuex, eslint)',
      'Default ([Vue 2] babel, eslint)',
      'Default ([Vue 3 Preview) ([Vue 3 babel, eslint])',
      'Manually select features'
    ]
  },
  {
    type:'checkbox',
    message:'Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection',
    name:'Manually',
    default:['Choose Vue version','Babel','Linter / Formatter',],
    loop:false,
    choices: [
      'Choose Vue version',
      'Babel',
      'Progressive WebApp (PWA) Support',
      'Router',
      'Vuex',
      'CSS Pre-processors',
      'Linter / Formatter',
      'Unit Testing',
      'E2E Testing'
        ],
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    }
  },
  {
    type:'list',
    message:'Choose a version of Vue.js that you want to start the project with',
    name:'version',
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    },
    choices: ['2.x','3.x (Preview)']
  },
  {
    type:'list',
    message:'Pick a linter / formatter config:',
    name:'linter',
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    },
    choices: ['ESLint with error prevention only','ESLint + Airbnb config','ESLint + Standard config','ESLint + Prettier']
  },
  {
    type:'checkbox',
    message:'Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)',
    name:'lint',
    default:['Lint on save'],
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    },
    choices: ['Lint on save','Lint and fix on commit']
  },
  {
    type:'list',
    message:'Where do you prefer placing config for Babel, ESLint, etc.?',
    name:'config',
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    },
    choices: ['In dedicated config files','In package.json']
  },
  {
    type:'confirm',
    message:'Save this as a preset for future projects?',
    name:'save',
    when:(answer)=>{
      if (answer.item==='Manually select features')
        return true
    }
  },
   {
    type:'input',
    message:'Save preset as',
    name:'saveName',
    when:(answer)=>{
      if (answer.save===true)
        return true
    }
  },
])
  .then((answers) => {
    console.log(answers);

  })
  .catch((error) => {console.log(error);} )
```

### 五、全部代码参考
[github参考代码](https://github.com/T-en1991/usePackages/tree/main/useInquirer)
