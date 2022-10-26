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
