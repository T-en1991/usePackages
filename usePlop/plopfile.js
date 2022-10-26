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
