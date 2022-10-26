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
