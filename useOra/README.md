简介：ora包用于在终端显示加载中的效果，类似于前端页面的loading效果
参考文档：https://www.npmjs.com/package/ora

### 一、包的安装和引用

```
npm install ora
```

### 二、ora的常用api


| 属性 | 类型 | 用处 | 默认值 |
| --- | --- | --- | --- |
| text | string | loading后面的信息 |  |
| prefixText | string | loading前面的信息 |  |
| color | string | loading本身的颜色 | cyan |
| hideCursor | Boolean | 设置成 false 阻止 Ora 隐藏光标 | true |
| indent | number | 缩进多少个空格 | 0 |

### 三、ora的常用方法

| 方法名称 | 用处 | 入参 | 备注 |
| --- | --- | --- | --- |
| start | 启动spinner. 返回实例. 如果提供了text，会设置text值. | text? |  |
| stop | 停止并清除 spinner. 返回实例 |  |  |
| succeed | 停止 spinner, 会变成绿色 ✔ 并设置相关文本. 返回实例 | text? |  |
| fail | 停止 spinner, 会变成红色 ✖ 并设置相关文本. 返回实例 | text? |  |
| warn | 停止 spinner, 会变成黄色  ⚠ 并设置相关文本. 返回实例 | text? |  |
| info | 停止 spinner, ,会变成蓝色  ℹ 并设置相关文本. 返回实例 | text? |  |
| isSpinning | 实例目前是否在旋转中 |  | 返回布尔值 |
| clear | 清除图像， 返回一个实例 |  |  |
| render | 手动渲染一帧. 返回改实例 |  |  |




### 四、ora的使用


```
import ora from 'ora';
import chalk from 'chalk';

const spinner = ora(`准备下载中${chalk.red('...')}`).start();

setTimeout(() => {
  spinner.color = 'yellow';//loading的颜色
  //spinner.prefixText='在转圈的前面显示的东西';//loading前面的内容
  spinner.text = '下载中。。。';//loading后面的内容
  spinner.hideCursor=true;//false时阻止隐藏ora光标，默认true
  spinner.indent=20;//缩进多少格，默认0
  console.log(spinner.isSpinning);//实例目前是否在旋转中
  //改变默认loading的样子
  // spinner.spinner={
  //   interval: 80, // Optional
  //   frames: ['-', '+', '-']
  // }


  setTimeout(() => {
    spinner.color = 'green';
    spinner.text = '下载完成！！！'
   // spinner.stop();//停止并清除 spinner. 返回实例
      spinner.succeed(`下载${chalk('成功')}`)//停止 spinner, 会变成绿色 ✔ 并设置相关文本. 返回实例.
    // spinner.fail();//停止 spinner, 会变成红色 ✖ 并设置相关文本. 返回实例
    // spinner.warn();//停止 spinner, 会变成黄色  ⚠ 并设置相关文本. 返回实例
    // spinner.info();//停止 spinner, ,会变成蓝色  ℹ 并设置相关文本. 返回实例
  }, 3000);
}, 1000);

```
### 五、oraPromise的使用

```
import {oraPromise} from 'ora';
import chalk from 'chalk';

const a=await oraPromise((spinner) => {
  return new Promise((res,rej)=>{
    spinner.start()
    spinner.text=`准备下载中${chalk.red('...')}`
    setTimeout(() => {
      spinner.color = 'yellow';//loading的颜色
      //spinner.prefixText='在转圈的前面显示的东西';//loading前面的内容
      spinner.text = '下载中。。。';//loading后面的内容
      spinner.hideCursor=true;//false时阻止隐藏ora光标，默认true
      spinner.indent=20;//缩进多少格，默认0
      console.log(spinner.isSpinning);//实例目前是否在旋转中
      //改变默认loading的样子
      // spinner.spinner={
      //   interval: 80, // Optional
      //   frames: ['-', '+', '-']
      // }


      setTimeout(() => {
        spinner.color = 'green';
        spinner.text = '下载完成！！！'
        // spinner.stop();//停止并清除 spinner. 返回实例
        spinner.succeed(`下载${chalk('成功')}`)//停止 spinner, 会变成绿色 ✔ 并设置相关文本. 返回实例.
        // spinner.fail();//停止 spinner, 会变成红色 ✖ 并设置相关文本. 返回实例
        // spinner.warn();//停止 spinner, 会变成黄色  ⚠ 并设置相关文本. 返回实例
        // spinner.info();//停止 spinner, ,会变成蓝色  ℹ 并设置相关文本. 返回实例
      }, 3000);
    }, 1000);
  })
})


```
### 六、链接地址
[github参考代码](https://github.com/T-en1991/usePackages/tree/main/useOra)
